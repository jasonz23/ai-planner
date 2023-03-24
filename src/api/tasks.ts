import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../pages/App";
import { RootState } from "../slices";
import { addTaskUnique} from "../slices/tasks";

export const generateTasks = ({events, wakeUp, sleep, studyLength = 40 * 60 * 1000, breakLength = 10 * 60 * 1000, time, uid, callBack}: any): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    // Create an array to store the generated events
    const schedule: any[] = [];
    const wakeUpTime = new Date(wakeUp);
    const sleepTime= new Date(sleep);

    // Helper function to check if a time slot is available for a new event
    function isAvailable(start: any, end: any) {
      for (let i = 0; i < events.length; i++) {
        const event = events[i];
        if ((start >= event.start && start < event.end) || (end > event.start && end <= event.end)) {
          return false;
        }
      }
      return true;
    }
  
    // Helper function to create a new event and add it to the schedule
    async function addEvent(title:string, start: any, end: any) {
        const task = { title: title, start: start, end: end, uid: uid, event_id: Math.random(), doc_id: ""};
        const docRef = await addDoc(collection(db, "events"), task)
        task.doc_id = docRef.id;
        updateDoc(doc(db, "events", docRef.id), task);
        dispatch(addTaskUnique(task));
        schedule.push(task);

    }
  
    // Start generating events from wakeUpTime to sleepTime
    let currentTime = wakeUpTime;

    while (currentTime < sleepTime) {
        // Check if there is enough time for a study event
        const studyEndTime = new Date(currentTime.getTime() + studyLength);
        if (studyEndTime <= sleepTime && isAvailable(currentTime, studyEndTime)) {
            await addEvent('Study', currentTime, studyEndTime);
            currentTime = new Date(studyEndTime.getTime()); // set current time to end of study
        } else {
            // Skip this time slot and move to the next one
            currentTime = new Date(currentTime.getTime() + 1 * 60000); // move by 1 minute
            continue;
        }

        // Check if there is enough time for a break event
        const breakEndTime = new Date(currentTime.getTime() + breakLength);
        if (breakEndTime <= sleepTime && isAvailable(currentTime, breakEndTime)) {
            await addEvent('Break', studyEndTime, breakEndTime); // start break right after study
            currentTime = new Date(breakEndTime.getTime()); // set current time to end of break
        } else {
            // Skip this time slot and move to the next one
            currentTime = new Date(studyEndTime.getTime()); // start next study right after current study
        }
    }

    callBack(true);
  }

export const getTasks = () => {};

export const addTask = () => {};

export const removeTask = () => {};


// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export const generateTasks = (info: any): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
//     console.log("click");
//     const messages: any[] = [];
//     const today = new Date();
    
//     let prompt: string = `I have a list of javascript objects which are events in my personal schedule.`;
//     info.tasks.forEach((task: any) => {
//         if (task.end.getDate() == today.getDate() && task.end.getMonth() == today.getMonth() && task.end.getFullYear() == today.getFullYear()) {
//             prompt += `I have ${task.title} event starting at ${task.start} and ends at ${task.end} as well as an event_id of ${task.event_id}.`;
//         }
//     })
//     //Return the events as a list of objects with event_id field which is a unique id for the event, title field which is the name of the event, start field which is when the event starts, end field which is when the event ends and uid which will equal ${info.uid}
//     prompt  += `Considering that I wake up at ${info.wakeUp} and sleep at ${info.sleep}. Give me times in UTC-7 where I can study or take breaks so I can optimize the amount I can study from when I wake up to when I sleep. I want to take a 10 minute break for every 40 minutes I study. Also make time for breakfest, lunch and dinner. Make sure to not overlap studying and break time with the events I have included (if they exist). Give me at least 10 events of studying or breaks. Format the times as a list of json objects where event_id field is a unique id for the event, title field is the name of the event, start field is the start time of the event in UTC-7, end field is the end time of the event in UTC-7 and uid field is ${info.uid}. The uid field is the same for all events/ times and is equal to ${info.uid}.`;
//     messages.push({role:"user", content: prompt + "Only return the list and no other text and do not include new lines or \n. Only return the times and do not include the events I included in my prompt. Do not give any text other than the list. Return the full list."})
//     //messages.push({role:"user", content:`format your answer as a list of json objects where event_id field is a unique id for the event, title field is the name of the event, start field is the start of the event, end field is the end of the event and uid field is ${info.uid}.`})
//     const response = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: messages,
//         // temperature: 0.7,
//         // top_p: 1,
//         // frequency_penalty: 0,
//         // presence_penalty: 0,
//     });
//     console.log(response.data.choices[0].message.content)
//     let res = response.data.choices[0].message.content.replace("\n", "");
//     const start = res.indexOf("[");
//     const end = res.indexOf("]");
//     res = res.slice(start, 1);
//     res = res.slice(0, end + 1);
//     const tasks = JSON.parse(response.data.choices[0].message.content);
//     console.log(tasks);
//     tasks.forEach(async (task: any) => {
        
//         const formattedTask = {
//             event_id: Math.random(),
//             start: new Date(task.start),
//             end: new Date(task.end),
//             title: task.title,
//             uid: info.uid,
//             doc_id: "",
//         };
//         console.log(formattedTask);
//         addDoc(collection(db, "events"), formattedTask).then(
//             (docRef) => {
//                 console.log("hit")
//                 formattedTask.doc_id = docRef.id;
//                 updateDoc(doc(db, "events", docRef.id), formattedTask);
//                 dispatch(addTaskUnique(formattedTask));
//             }
//         );
//     info.callBack(true);
//     setTimeout(() => {
//         window.location.reload()
//     },700)
        
//     })
//     //window.location.reload();
// };
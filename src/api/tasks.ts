import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../pages/App";
import { RootState } from "../slices";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const generateTasks = (info: any): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    console.log("click");
    const messages: any[] = [];

    
    let prompt: string = `I have a list of javascript objects which are events in my personal schedule.`;
    info.tasks.forEach((task: any) => {
        prompt += `I have ${task.title} event starting at ${task.start} and ends at ${task.end} as well as an event_id of ${task.event_id}.`
    })
    console.log(prompt)
    //messages.push({role: "system", content: "you are a personal assistant"})
    messages.push({role: "user", content: prompt});
    //Return the events as a list of objects with event_id field which is a unique id for the event, title field which is the name of the event, start field which is when the event starts, end field which is when the event ends and uid which will equal ${info.uid}
    const a  = `Considering that I wake up at ${info.wakeUp} and sleep at ${info.sleep}. Give me times in UTC-7 where I can study or take breaks so I can optimize the amount I can study. I want to take a 10 minute break for every 40 minutes I study. Also make time for breakfest, lunch and dinner. Make sure to not overlap studying and break time with the events I have included."`;
    messages.push({role: "user", content: a});
    messages.push({role:"user", content:`Format the times as a list of json objects where event_id field is a unique id for the event, title field is the name of the event, start field is the start time of the event in UTC-7, end field is the end time of the event in UTC-7 and uid field is ${info.uid}.`})
    messages.push({role:"user", content: "only return the list and no other text and do not include new lines or \n. Only return the times and do not include the events I included in my prompt. Do not give any text other than the list."})
    //messages.push({role:"user", content:`format your answer as a list of json objects where event_id field is a unique id for the event, title field is the name of the event, start field is the start of the event, end field is the end of the event and uid field is ${info.uid}.`})

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
        // temperature: 0.7,
        // top_p: 1,
        // frequency_penalty: 0,
        // presence_penalty: 0,
    });
    console.log(response.data.choices[0].message.content)
    let res = response.data.choices[0].message.content.replace("\n", "");
    const start = res.indexOf("[");
    const end = res.indexOf("]");
    res = res.slice(start, 1);
    res = res.slice(0, end + 1);
    const tasks = JSON.parse(response.data.choices[0].message.content);
    console.log(tasks);
    tasks.forEach((task: any) => {
        console.log(task);
        const formattedTask = {
            event_id: task.event_id,
            start: new Date(task.start),
            end: new Date(task.end),
            title: task.title,
            uid: task.uid,
            doc_id: "",
          };
        addDoc(collection(db, "events"), formattedTask).then(
            (docRef) => {
            formattedTask.doc_id = docRef.id;
              updateDoc(doc(db, "events", docRef.id), formattedTask);
              return formattedTask;
            }
          );
    })
    //window.location.reload();
};

export const getTasks = () => {};

export const addTask = () => {};

export const removeTask = () => {};
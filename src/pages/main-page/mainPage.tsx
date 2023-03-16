import React from "react";
import AiGenerate from "../../components/ai-generate/aiGenerate";
import NavBar from "../../components/nav-bar/navBar";
import { Scheduler } from "../../components/scheduler";
import { minWidth } from "../../constants/dimensions";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          marginTop: "70px",
          marginLeft: window.innerWidth <= minWidth ? "" : "88px",
          display: "flex",
          flexDirection:
            window.innerWidth >= minWidth ? "row" : "column-reverse",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: 3 }}>
          <Scheduler
            view="day"
            events={[
              {
                event_id: 1,
                title: "Event 1",
                start: new Date("2021 5 2 09:30"),
                end: new Date("2021 5 2 10:30"),
              },
            ]}
            day={{ startHour: 0, endHour: 23, step: 60 }}
            // getRemoteEvents={async (query) => {
            //   console.log(query);
            //   return new Promise((res) => {
            //     setTimeout(() => {
            //       res(EVENTS);
            //     }, 1000);
            //   });
            // }}
            // eventRenderer={(event) => <p onClick={() => console.log("?")}>{event.title}</p>}
            // onEventClick={(event) => {
            //   console.log(event);
            // }}
            // dialogMaxWidth="sm"
            // loading={loading}
            // view="month"
            // editable={false}
            // deletable={false}
            // draggable={false}
            // selectedDate={new Date()}
            // height={800}
            // week={{
            //   weekDays: [0, 1, 2, 3, 4, 5, 6],
            //   weekStartOn: 6,
            //   startHour: 8,
            //   endHour: 20,
            //   step: 60,
            //   // cellRenderer: () => {
            //   //   return <>week</>;
            //   // },
            // }}
            // month={{
            //   weekDays: [0, 1, 2, 3, 4, 5],
            //   weekStartOn: 6,
            //   startHour: 7,
            //   endHour: 15,
            //   cellRenderer: () => {
            //     return <h1>month</h1>;
            //   },
            // }}
            // day={{
            //   startHour: 6,
            //   endHour: 14,
            //   step: 60,
            //   cellRenderer: () => {
            //     return <h1>DAY</h1>;
            //   },
            // }}
            // day={{
            //   startHour: 8,
            //   endHour: 18,
            //   step: 20,
            // }}
            // navigation={false}
            // navigationPickerProps={{
            //   shouldDisableDate(day) {
            //     return true;
            //   },
            // }}
            // disableViewNavigator
            // resources={RECOURCES}
            // resourceFields={{
            //   idField: "admin_id",
            //   textField: "title",
            //   subTextField: "mobile",
            //   avatarField: "title",
            //   colorField: "color",
            // }}
            // resourceViewMode="tabs"
            // recourseHeaderComponent={(recourse) => {
            //   console.log(recourse);
            //   return <div>HAHA</div>;
            // }}
            // fields={[
            //   {
            //     name: "description",
            //     type: "input",
            //     config: { label: "Description", multiline: true, rows: 4 },
            //   },
            //   {
            //     name: "admin_id",
            //     type: "select",
            //     config: { label: "Assignee", required: true, multiple: "chips" },
            //     // default: [1, 2],
            //     options: [
            //       // {
            //       //   id: 1,
            //       //   text: "One",
            //       //   value: 1,
            //       // },
            //       {
            //         id: 2,
            //         text: "Two",
            //         value: 2,
            //       },
            //       {
            //         id: 3,
            //         text: "Three",
            //         value: 3,
            //       },
            //       {
            //         id: 4,
            //         text: "Four",
            //         value: 4,
            //       },
            //     ],
            //   },
            // ]}
            // onConfirm={async (event, action) => {
            //   console.log(action);
            //   return new Promise((res, rej) => {
            //     setTimeout(() => {
            //       res({
            //         ...event,
            //         event_id: event.event_id || Math.random(),
            //         // title: "From Custom",
            //         // start: new Date(new Date().setHours(11)),
            //         // end: new Date(new Date().setHours(18)),
            //       });
            //     }, 1000);
            //   });
            // }}
            // onDelete={async (id) => {
            //   return new Promise((res, rej) => {
            //     setTimeout(() => {
            //       // setEvents((prev) => {
            //       //   return prev.filter((p) => p.event_id !== id);
            //       // });
            //       res(id);
            //     }, 1000);
            //   });
            // }}
            // customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
            // viewerExtraComponent={(fields, e) => {
            //   return (
            //     <div>
            //       {Array.from("a".repeat(50)).map((a, i) => (
            //         <div key={i}>Extra</div>
            //       ))}
            //     </div>
            //   );
            //   // console.log(fields, e);
            //   // return (
            //   //   <div>
            //   //     {fields.map((a, i) => (
            //   //       <div key={i}>{e.description}</div>
            //   //     ))}
            //   //   </div>
            //   // );
            // }}
            // viewerTitleComponent={(event) => <>{event.title}</>}
            // direction="rtl"
            //  locale={ptBR}
            //  hourFormat={"24"}
            //  translations={{
            //   navigation: {
            //     month: "Mês",
            //     week: "Semana",
            //     day: "Dia",
            //     today: "Hoje"
            //   },
            //   form: {
            //     addTitle: "Novo Evento",
            //     editTitle: "Editar Evento",
            //     confirm: "Confirmar",
            //     delete: "Excluir",
            //     cancel: "Cancelar",
            //   },
            //   event: {
            //     title: "Título",
            //     start: "Início",
            //     end: "Fim"
            //   },
            //   moreEvents: "mais..."
            // }}
            // onEventDrop={async (time, updated) => {
            // return new Promise((res) => {
            //   setTimeout(() => {
            //     // setEvents((prev: any) => {
            //     //   return prev.map((e) =>
            //     //     e.event_id === updated.event_id ? updated : e
            //     //   );
            //     // });
            //     res(updated);
            //   }, 1000);
            // });
            // }}
          />
        </div>
        <div
          style={{
            flex: 1,
            height: "50vh",
            marginTop: window.innerWidth >= minWidth ? "36px" : "",
            border: "##e0e0e0 1px solid",
          }}
        >
          <AiGenerate />
        </div>
      </div>
    </>
  );
};

export default MainPage;

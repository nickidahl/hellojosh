import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFire, faClock } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./App.css";
import Button from "./components/Button";
import CourseCounter from "./components/CourseCounter";
import Detail from "./components/Detail";
import CourseTitle from "./components/CourseTitle";
import Course from "./components/Course";
import Notification from "./components/Notification";

library.add(faFire, faClock, faReact, faBell);

function App() {
  return (
    <>
      <h1>Hej...</h1>
      <CourseCounter no="11" txt="courses completed" />
      <CourseCounter no="4" txt="courses in progress" />

      <Notification unread="2" />
      <Course
        logo="react"
        title="Mastering React"
        teacher="Carsten Lund"
        duration="17h59m"
        rating="5.0"
      />
    </>
  );
}

export default App;

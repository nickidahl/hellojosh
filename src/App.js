import React from "react";
import { Router } from "@reach/router";
import User from "./components/User";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFire, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import "./App.css";
import Testview from "./views/Testview";

library.add(
  faFire,
  faClock,
  faReact,
  faBell,
  faArrowAltCircleLeft,
  faArrowAltCircleRight
);

function App() {
  return (
    <Router>
      <User path="/:firstname/*"></User>
      <Testview path="testview" />
    </Router>
  );
}

export default App;

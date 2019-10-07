import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./conponents/Navbar";
import { EditExercise } from "./conponents/EditExercise";
import { CreateExercise } from "./conponents/CreateExercise";
import { ExercisesList } from "./conponents/ExercisesList";
import { CreateUser } from "./conponents/CreateUser";

// export const port = process.env.PORT_FRONT || 3000;

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import style from './App.module.css';
import {Profile} from "./components/Profile/Profile";
import {Comments} from './components/Comments/Comments';


function App() {
  return (
    <div className={style.container}>
      <Profile/>
      <Comments/>
    </div>
  );
}

export default App;

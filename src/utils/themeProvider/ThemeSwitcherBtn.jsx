import React, { useContext } from "react";
import Switch from "react-switch";
import {FiSun,FiMoon} from 'react-icons/fi'
import './util.css'

import { ThemeContext } from "./ThemePovider";

const ThemeSwitcherBtn = () => {

  const themeContext = useContext(ThemeContext);

  return (
    <label className="dark-switch">
      <Switch 
        onChange={themeContext.toggle} 
        checked={themeContext.theme === "dark"} 
        checkedIcon={<FiSun style={{color:"#fff"}}/>} 
        uncheckedIcon={<FiMoon style={{color:"#fff"}}/>}
        onColor="#7b7b85"
        offColor="#7b7b85"/>
    </label>
  );
};

export default ThemeSwitcherBtn;
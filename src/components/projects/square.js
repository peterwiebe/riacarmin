import React from "react";
import style from "./style.module.scss";
const Square = ({ position, rotation }) => {
  const a = Math.ceil(Math.random() * 10);

  return (
    <svg className={`${style.square} square__animation__${a}`}
      width="80px"
      height="80px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        left: `${Math.random() * 100}%`,
        willChange: `transform`,
        //transform: `rotate(${r}deg)`
      }}
    >
      <defs>
        <linearGradient id="Gradient">
          <stop className={`square ${style.square__gradient__start}`} offset="0%" />
          <stop className={style.square__gradient__end} offset="100%" />
        </linearGradient>
      </defs>
      <rect className={style.square__rect} x="2" y="11.2" width="58" height="66.828" fill="url(#Gradient)" />
      <path className={style.square__path__2} d="M60,78l18,-6.914l-0.038,-69.086l-17.962,9.2l0,66.8Z" />
      <path className={style.square__path__1} d="M2,11.2l13.351,-9.2l62.649,0l-18,9.2l-58,0Z" />
    </svg>
  )
}

export default Square;

//style in react 3 ways
//1.inline
//2.css file
//3.css module file

import React from "react";
import './S5css.css'
import style from './S5.module.css'

export default function Cssuse(){
    return(
        <div>
            <h1 style={{color:"green",backgroundColor:"blue"}}>style 1</h1>
            <h1 className="bye">style 2</h1>
            <h1 className={style.suck}>style 3</h1>
            
        </div>
    )
}
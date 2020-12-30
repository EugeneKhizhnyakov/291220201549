import React from 'react';
import style from './CommentList.module.css'

export const CommentList = ({comment}) =>{
    return(
        <div className={style.item}>
            <div className={style.head}>
                <h3 className={style.name}>{comment.name}</h3>
                <div className={style.date}>{comment.date}</div>
            </div>
            <div className={style.text}>
                <p>{comment.text}</p>
            </div>
        </div>
    )

}
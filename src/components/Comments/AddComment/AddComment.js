import React, { useState} from 'react';
import style from './AddComment.module.css'

export const AddComment = ({ addComment }) => {
    const [value, setValue] = useState("");

    const addHandler = e => {
        e.preventDefault();
        if (!value) return;
        addComment(value);
        setValue("");
    };

    const keyHandler = e => {
        if (e.ctrlKey && e.key === 'Enter'){
            addComment(value);
        setValue("");
        }  
    };


    return (
        <div className={style.box}>
            <textarea
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyUp={keyHandler} 
                className={style.textarea}
            />
            <button 
            onClick={addHandler}
            className={style.button}>
               Написать консультанту
            </button>
        </div>

    );

}
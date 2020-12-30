import React,{useState} from 'react';
import {CommentList} from './CommentList/CommentList';
import {AddComment} from './AddComment/AddComment';
import style from "./Comments.module.css";

export const Comments = () =>{
    const [comments, setComments] = useState([
        {name:'Самуил',
        date: "13 октября 2011",
        text:'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'},
        {name:'Лилия Семёновна',
        date: "14 октября 2011",
        text:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'},
        {name:'Лилия Семёновна',
        date: "14 октября 2011",
        text:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'}]);
    
    const date = () => {
        const monthAll = [
          "января",
          "февраля",
          "марта",
          "апреля",
          "мая",
          "июня",
          "июля",
          "августа",
          "сентября",
          "октября",
          "ноября",
          "декабря"
        ];
    
        const today = new Date(),
          month = monthAll[today.getMonth()],
          year = today.getFullYear(),
          day = String(today.getDate()).padStart(2, "0");
    
        return `${day} ${month} ${year}`;
      }

    const addComment = text => {
        const newComment = [...comments, { name:'Вы',date:date(),text }];
        setComments(newComment);
    };

    return(<div>
        <div className={style.box}>
          <div className={style.head}>
            <div className={style.title}>
              <h2 className={style.h}>Последние отзывы</h2>
              <a href="#">Все отзывы</a>
            </div>
            <div className={style.data}>
              <a href="#">
                <i
                  className={style.icon}
                  style={{ backgroundPosition: "0 0" }}
                ></i>
                131
              </a>
              <a href="#">
                <i
                  className={style.icon}
                  style={{ backgroundPosition: "16px 0" }}
                ></i>
                14
              </a>
            </div>
          </div>
          {comments.map((comment, id) =><div key={id} > 
                 <CommentList comment={comment}/>
             </div>)}
        </div>
        <AddComment addComment={addComment}/>
      </div>
    )
}
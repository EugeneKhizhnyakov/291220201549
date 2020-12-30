import React from "react";
import styles from "./Profile.module.css";
import img from "./ProfileImg.png";
import {Stats} from "./Stats/Stats";

export const Profile = () => {

    return (
      <div className={styles.box}>
        <div className={styles.image}>
          <img src={img} alt="manager"></img>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Вероника Ростова</h2>
          <h5 className={styles.description}>
            Менеджер по продажам
          </h5>
          <div className={styles.text}>
            <p>
              Подберу для вас самые лучшие предложения. <br></br>Мои услуги абсолютно
              бесплатны
            </p>
          </div>
          <Stats/>
        </div>
      </div>
    );
}



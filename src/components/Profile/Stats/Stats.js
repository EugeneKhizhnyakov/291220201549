import React from "react";
import styles from "./Stats.module.css";

export const Stats = () => {
    return (
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <td></td>
            <td>Услуг</td>
          </tr>
          <tr className={styles.table_line}>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr>
            <td>Ручное бронирование
            <span
                className={styles.table_marker}
                style={{ backgroundColor: "#b1e19b", width: "100%" }}
              ></span>
            </td>
            <td>11</td>
          </tr>
          <tr>
            <td>
              Пакетные туры
              <span
                className={styles.table_marker}
                style={{ backgroundColor: "#ace2f8", width: "30%" }}
              ></span>
            </td>
            <td>3</td>
          </tr>
          <tr>
            <td>
              Отели
              <span
                className={styles.table_marker}
                style={{ backgroundColor: "#ace2f8", width: "20%" }}
              ></span>
            </td>
            <td>1</td>
          </tr>
        </tbody>
        <tfoot className={styles.tfoot}>
          <tr className={styles.table_line}>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Всего</td>
            <td>15</td>
          </tr>
        </tfoot>
      </table>
    );
}


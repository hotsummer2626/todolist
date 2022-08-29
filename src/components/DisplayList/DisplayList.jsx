import React from "react";
import styles from "./DisplayList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCheck,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const DisplayList = ({ listData }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Todo's</h2>
      <div className={styles.overview}>2 todos pending. 1 completed</div>
      <ul className={styles.listWrapper}>
        <li className={styles.listHeader}>
          <span>#</span>
          <span>Details</span>
          <span>Action</span>
        </li>
        {listData.map((item, index) => (
          <li key={item.id} className={styles.listItem}>
            <span>{index + 1}</span>
            <span>{item.detail}</span>
            <span>
              {item.isDone ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faXmark} />
              )}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayList;

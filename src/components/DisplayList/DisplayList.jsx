import React from "react";
import styles from "./DisplayList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCheck,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const DisplayList = ({ listData, changeListItemStatus, deleteListItem }) => {
  const doneItemAmount = listData.filter((list) => list.isDone === true).length;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Todo's</h2>
      <div className={styles.overview}>{`${
        listData.length - doneItemAmount
      } todos pending. ${doneItemAmount} completed`}</div>
      <ul className={styles.listWrapper}>
        <li className={styles.listHeader}>
          <span>#</span>
          <span>Details</span>
          <span>Action</span>
        </li>
        {listData.map((item, index) => (
          <li
            key={item.id}
            className={`${styles.listItem} ${item.isDone ? "" : styles.active}`}
          >
            <span>{index + 1}</span>
            <span>{item.detail}</span>
            <span>
              {item.isDone ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className={styles.icon}
                  onClick={changeListItemStatus(item, index)}
                />
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className={styles.icon}
                    onClick={changeListItemStatus(item, index)}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className={styles.icon}
                    onClick={deleteListItem(index)}
                  />
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayList;

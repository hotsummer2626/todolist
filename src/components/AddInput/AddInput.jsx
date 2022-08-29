import React from "react";
import styles from "./AddInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddInput = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>todo list</div>
      <div className={styles["input-button"]}>
        <input type="text" placeholder="Enter Todo" />
        <div className={styles.button}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default AddInput;

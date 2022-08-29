import React, { useState } from "react";
import styles from "./AddInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddInput = ({ addNewListItem }) => {
  const [inputDetail, setInputDetail] = useState("");

  const handleInputChange = (event) => setInputDetail(event.target.value);

  return (
    <div className={styles.container}>
      <div className={styles.title}>todo list</div>
      <div className={styles["input-button"]}>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={handleInputChange}
        />
        <div
          className={styles.button}
          onClick={() => addNewListItem(inputDetail)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default AddInput;

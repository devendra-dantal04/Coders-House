import React from "react";
import styles from "./Button.module.css";

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
        <span>{text}</span>
        {/* <img src="/images/arrow.png" alt="arrow-forward" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
        </svg>
    </button>
  );
};

export default Button;

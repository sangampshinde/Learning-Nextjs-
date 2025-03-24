import React from 'react';
import style from "../page.module.css";

const StyleComponent = () => {
  return (
    <div>
      <h1>CSS in Next.js</h1>
      <p style={{ color: "red" }}>Inline style red text</p>
      <h1 style={{ color: "green" }}>Global CSS style green text</h1>
      <p className={style.greenText}>Module CSS text color blue</p>
    </div>
  );
}

export default StyleComponent;
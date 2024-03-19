import styles from "./ui.module.css";

import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const replaceScriptHandler = (e) => {
    const ValidatePattern = /script/g;
    if (ValidatePattern.test(e.target.value)) {
      e.target.value = e.target.value.replace(ValidatePattern, "");
    }
  };
  return (
    <input
      className={styles.input}
      required={props.required}
      type={props.type}
      value={props.value}
      ref={ref}
      onChange={() => replaceScriptHandler(event)}
    />
  );
});

export default Input;

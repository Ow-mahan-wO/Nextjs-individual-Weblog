import styles from "./ui.module.css";

import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className={styles.container}>
      <div>{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;

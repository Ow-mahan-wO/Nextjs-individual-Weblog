import styles from "./ui.module.css";
import clsx from "clsx";

const Notification = ({ success,Message }) => {
  return (
    <div className={styles.notification}>
      <div
        className={clsx({
          [styles.success]: success === true,
          [styles.error]: success === false,
        })}>
        <p>{Message}</p>
      </div>
    </div>
  );
};

export default Notification;

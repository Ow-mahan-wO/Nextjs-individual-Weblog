import styles from "./ui.module.css";

const Button = ({ children, outline = false, onClick }) => {
  return (
    <button
      className={!outline ? styles.button : styles.btnOutLine}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

import styles from "./Pagination.module.css";

import Button from "../ui/Button";

const Pagination = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.slideBtn}>prev</p>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <p className={styles.slideBtn}>Next</p>
      </div>
    </>
  );
};

export default Pagination;

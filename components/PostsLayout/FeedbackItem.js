import styles from "./feedbackitem.module.css";

import Image from "next/image";

const FeedbackItem = ({ data }) => {
  const { feedback, email, name } = data;
  return (
    <>
      <div className={styles.container}>
        <div style={{ display: "flex" }}>
          <Image
            className={styles.image}
            src="/images/default-user.jpg"
            width={80}
            height={80}
            loading="lazy"
            alt="user-profile"
          />
          <h4>{name != "" ? name : email}</h4>
        </div>
        <div className={styles.feedbackContainer}>
          <p>{feedback}</p>
        </div>
      </div>
    </>
  );
};

export default FeedbackItem;

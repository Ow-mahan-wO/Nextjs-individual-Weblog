import Link from "next/link";
import styles from "./CardPost.module.css";

import Image from "next/image";

const CardPost = ({ post }) => {
  const { title, date, image, excerpt, slug } = post;
  const dateFormat = new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <Link href={`/posts/${slug}`}>
      <div className={styles.CardContainer}>
        <div className={styles.coverContainer}>
          <Image
            src={`/images/posts/${image}`}
            sizes="100vw"
            width={100}
            height={100}
            className={styles.image}
            loading="lazy"
            alt={slug+"-postImage"}
          />
        </div>
        <div className={styles.informationCardContainer}>
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <p>{dateFormat}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardPost;

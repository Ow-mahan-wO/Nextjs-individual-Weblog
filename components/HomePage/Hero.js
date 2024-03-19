import Image from "next/image";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div>
          <Image
            src="/images/poster-illastrator.png"
            width={"800"}
            height={"800"}
            priority
            alt="posterIllastrator"
          />
        </div>
        <div className={styles.box}>
          <h1>Ow-mahan-wO Nextjs Weblog</h1>

          <h4 className={styles.heroSection__TextContainer}>
            Welcome to my individual Weblog website. i write articles and
            weblogs about libraries and frameworks such next , react , vue ,
            astro and etc. you can read my articles and Blogs, and send your
            feedback to me.i hope this Articles and Blogs useful for you
          </h4>
        </div>
      </section>
    </>
  );
};

export default Hero;

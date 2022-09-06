import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.container_first}>
        <div className={styles.footer}>
          <p className={styles.main_text}>Amadeus IT Group</p>
          <p className={styles.text}>
            C. Salvador de Madariaga, 1 28027 Madrid
          </p>
          <p className={styles.text}>Spain</p>
        </div>

        <div className={styles.follow_us}>
          <div>
            <p>Follow us on</p>
          </div>
          <div>
            <img
              className={styles.container_twitter}
              src={require("../../assets/Icons/TwitterWhite.svg").default}
              alt="Twitter Icon"
            />
          </div>

          <div>
            <img
              className={styles.img}
              src={require("../../assets/Icons/YoutubeWhite.svg").default}
              alt="Youtube Icon"
            />
          </div>
        </div>
      </div>
      <div className={styles.container_footer}>
        <div className={styles.copyright}>
          <p className={styles.copyright_text}>
            Copyright <span>&copy;</span> 2022 Amadeus Hotels. All rights
            reserved.
          </p>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyright_text}>
            Photos by Felix Mooneeram & Serge Kutuzov on Unsplash
          </p>
        </div>
      </div>
    </div>
  );
}

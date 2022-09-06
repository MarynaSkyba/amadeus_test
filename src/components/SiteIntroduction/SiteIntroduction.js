import styles from "./SiteIntroduction.module.css";

export default function SiteIntroduction() {
  return (
    <>
      <div className={styles.container} id="library">
        <h1 className={styles.title}>Movie library</h1>
        <h2 className={styles.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </h2>
      </div>
    </>
  );
}

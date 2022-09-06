import styles from "./ContactUs.module.css";
import GoogleMaps from "../GoogleMaps/GoogleMaps";

export default function ContactUs() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.text}>How to reach us</h3>
          <p className={styles.about}>
            Lorem ipsum dolor sit amet, consetetur.
          </p>
        </div>

        <form>
          <div className={styles.name_form}>
            <div className={styles.name_desktop}>
              <label className={styles.label}>First Name *</label>
              <input
                className={styles.input}
                type="text"
                id="fname"
                name="firstname"
                required
              />
            </div>
            <div className={styles.surmane_desktop}>
              <label className={styles.label}>Last Name *</label>
              <input
                className={styles.input}
                type="text"
                id="fname"
                name="lastname"
                required
              />
            </div>
          </div>

          <label className={styles.label}>Email *</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            required
          />
          <label className={styles.label}>Telephone</label>
          <input
            className={styles.input}
            type="number"
            id="Telephone"
            name="Telephone"
          />
          <label className={styles.label}>Message *</label>
          <textarea className={styles.input} rows="4" required />

          <p className={styles.text_required}>* required fields</p>
          <div className={styles.terms}>
            <input type="checkbox" />
            <p className={styles.text_agree}>
              I agree to the{" "}
              <a className={styles.text_terms} href="">
                Terms & Conditions
              </a>
            </p>
          </div>
          <div className={styles.button_container}>
            <button className={styles.button}>Submit</button>
          </div>
        </form>
      </div>
      <GoogleMaps />
    </div>
  );
}



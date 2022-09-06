import styles from "./GoogleMaps.module.css"

export default function GoogleMaps() {
 

  return (
  <>
  <div id="contact" className={styles.contact}>
  <iframe title="Amadeus" className={styles.maps} id="gmap_canvas" src="https://maps.google.com/maps?q=Salvador%20de%20Madariaga,%201,%2028027%20Madrid&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
  </div>
</>
  );
}

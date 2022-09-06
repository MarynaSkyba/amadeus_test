import styles from "./QuickInfo.module.css";

const RemoveFavorites = () => {
  return (
    <>
      <span>
        <img
          className={styles.icon}
          src={require("../../assets/Icons/CloseGrey.svg").default}
          alt="Remove from grid Icon"
        />
      </span>
    </>
  );
};

export default RemoveFavorites;
  
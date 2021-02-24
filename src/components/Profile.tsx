import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/rafaeltreiber.png" alt="Rafael Treiber" />
      <div>
        <strong>Rafael Treiber</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}

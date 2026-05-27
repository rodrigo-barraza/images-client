import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles["landing-container"]}>
      <section className={styles["landing-hero-section"]}>
        <span className={styles["landing-icon-element"]} role="img" aria-label="Images">
          🖼️
        </span>
        <h1 className={styles["landing-title-heading"]}>Images</h1>
        <p className={styles["landing-subtitle-text"]}>
          Browse, organize, and manage your personal image library. View EXIF
          metadata, organize into albums, and explore your collection across
          JPG, GIF, RAW, and more.
        </p>
        <div className={styles["landing-status-badge"]} role="status">
          <span className={styles["landing-status-indicator"]} aria-hidden="true" />
          Service Online
        </div>
      </section>
    </main>
  );
}

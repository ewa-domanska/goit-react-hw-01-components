import styles from './statistics.module.css'

export const Statistics = ({title, stats}) => {
  const dataArray = [];

  stats.forEach((value) => {
    dataArray.push(
      <li className={styles.item} style={{
        backgroundColor: `${getRandomHexColor()}`
      }}>
        <span className={styles.label}>{value.label}</span>
        <span className={styles.percentage}>{value.percentage}%</span>
      </li>
    )
  })

  return (
    <section className={styles.statistics}>
      <div className={styles.statisticsWrapper}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
          {dataArray}
        </ul>
      </div>
    </section>
  );
}

function getRandomHexColor() {
  return`#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

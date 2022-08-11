import styles from './statistics.module.css'

export const Statistics = ({data}) => {
  const dataArray = [];

  data.forEach((value) => {
    dataArray.push(
      <li className={styles.item}>
        <span className={styles.label}>{value.label}</span>
        <span className={styles.percentage}>{value.percentage}%</span>
      </li>
    )
  })

  return (
    <section className={styles.statistics}>
      <div className={styles.statisticsWrapper}>
      <h2 className={styles.title}>Upload stats</h2>
      </div>

      <ul className={styles.statList}>
        {dataArray}
      </ul>
    </section>
  );
}

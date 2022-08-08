import styles from './statistics.module.css'

export const Statistics = ({data}) => {
  const dataArray = [];

  data.forEach((value) => {
    dataArray.push(
      <li className="item">
        <span className="label">{value.label}</span>
        <span className="percentage">{value.percentage}%</span>
      </li>
    )
  })

  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {dataArray}
      </ul>
    </section>
  );
}

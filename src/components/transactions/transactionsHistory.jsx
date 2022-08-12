import styles from './transactions.module.css'

export const Transactions = ({items}) => {
  const transactionsData = [];

  items.forEach((value) => {
    transactionsData.push(
      <tr className={styles.items}>
        <td className={styles.valueData}>{value.type}</td>
        <td className={styles.valueData}>{value.amount}</td>
        <td className={styles.valueData}>{value.currency}</td>
      </tr>
    )
  })

  return (
    <div className={styles.transactionsDataWrapper}>
      <table className="transaction-history">
        <thead>
        <tr>
          <th className={styles.valueName}>Type</th>
          <th className={styles.valueName}>Amount</th>
          <th className={styles.valueName}>Currency</th>
        </tr>
        </thead>

        <tbody>
        {transactionsData}
        </tbody>
      </table>
    </div>
  )
}



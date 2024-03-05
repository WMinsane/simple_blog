import styles from './page.module.css'
export default function Page() {
  return (
    <div className={styles.main}>
      <h2>お問い合わせフォーム</h2>
      <form>
        <input type="text"></input>
      </form>
    </div>

  )
}
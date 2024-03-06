import styles from './page.module.css'
export default function Page() {
  return (
    <div className={styles.main}>
      <form>
        <div className={styles.label}>メールアドレス</div>
        <input name="mailAddress" type="text" maxLength={100} className={styles.input} />
        <div className={styles.label}>お問い合わせ内容</div>
        <textarea name="comment" maxLength={500} rows={5} className={styles.input} />
        <button className={styles.button}>送信</button>
      </form>
    </div>

  )
}
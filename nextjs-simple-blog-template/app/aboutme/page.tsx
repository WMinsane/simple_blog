import styles from './page.module.css'
export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.imageCircle}></div>
      <h2>ごごちゃん</h2>
      <p>
        都内の私大理学部数学科卒。パソコンやIT系の話が苦手にも関わらず
        OBの就職先で一番比率が高かったという理由だけでSEを志す。<br />
        新卒で運用保守メインの会社に就職しテスター、開発工程を経験するも
        汎用的なスキルが身につかない環境に不安を感じ、エージェントを使い転職。<br />
        ぬるま湯から実力主義的な社風の会社に移ったことであぼーんされる恐怖におびえつつ
        日々勉強中。
      </p>
    </div>

  )
}
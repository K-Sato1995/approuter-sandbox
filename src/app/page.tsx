import styles from './page.module.css'
import { useBearStore } from '@/store'

export default function Home() {
  // const bears = useBearStore((state) => state.bears)
  const bears = useBearStore.getState().bears
  return (
    <main className={styles.main}>
      <h1>{bears}</h1>
    </main>
  )
}

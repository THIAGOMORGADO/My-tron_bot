import styles from './header.module.css'

export function Header() {
  return(
    <header className={styles.container}>
        <h1>L O G O</h1>

      <nav>
        <li><a href="http://">item 01</a></li>
        <li><a href="http://">item 01</a></li>
        <li><a href="http://">item 01</a></li>
        <li><a href="http://">item 01</a></li>
      </nav>
    </header>
  )
}
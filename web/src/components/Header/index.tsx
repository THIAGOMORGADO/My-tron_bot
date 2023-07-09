import styles from './header.module.css'

export function Header() {
  return(
    <header className={styles.container}>
        <h1>L O G O</h1>

      <nav>
        <li>item 01</li>
        <li>item 02</li>
        <li>item 03</li>
        <li>item 04</li>
      </nav>
    </header>
  )
}
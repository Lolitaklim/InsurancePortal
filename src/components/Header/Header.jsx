import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from './Logo'
import { IoMenu } from 'react-icons/io5'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  return (
    <header className={styles.header_container}>
      <div className={`${styles.header} container`}>
        <Logo />
        <nav className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
          <NavLink to="." end className={styles.nav_item}>
            ГЛАВНАЯ
          </NavLink>
          <NavLink to="insurance" className={styles.nav_item}>
            СТРАХОВАНИЕ
          </NavLink>
          <NavLink to="how-we-work" className={styles.nav_item}>
            КАК РАБОТАЕМ
          </NavLink>
          <NavLink to="useful-info" className={styles.nav_item}>
            ПОЛЕЗНОЕ
          </NavLink>
          <NavLink to="contacts" className={styles.nav_item}>
            КОНТАКТЫ
          </NavLink>
        </nav>
        <div className={styles.mobile_menu}>
          <span>Меню |</span>
          <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
            <IoMenu />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

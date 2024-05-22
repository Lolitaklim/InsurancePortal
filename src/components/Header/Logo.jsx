import { NavLink } from 'react-router-dom'
import styles from './Logo.module.css'
import logo from './../../assets/logo.png'
import logoText from './../../assets/logo-text.png'

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <NavLink to="." end>
        <img
          src={logo}
          alt="Логотип Все Виды Страхования"
          className={styles.logo}
        />
        <img
          src={logoText}
          alt="Текст логотипа Все Виды Страхования"
          className={styles.logo_text}
        />
      </NavLink>
    </div>
  )
}

export default Logo

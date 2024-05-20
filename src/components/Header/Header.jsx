import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <p>ff</p>
      <nav>
        <NavLink to="." end>
          home
        </NavLink>
        <br />
        <NavLink to="insurance">insurance</NavLink>
        <br />
        <NavLink to="how-we-work">HowWeWork</NavLink>
        <br />
        <NavLink to="useful-info">useful-info</NavLink>
        <br />
        <NavLink to="contacts">контакты contacts</NavLink>
        <br />
      </nav>
    </div>
  )
}

export default Header

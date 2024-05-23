import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from './Logo'
import { IoMenu, IoClose } from 'react-icons/io5'
import { useClickOutside } from '../../hooks/useClickOutside'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuRef = useRef(null)
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setIsOpen(false), 50)
  })

  const [itemId, setItemId] = useState(0)

  useEffect(() => {
    const runner = document.getElementById('runner')
    const items = document.querySelectorAll(`.${styles.nav_item}`)
    const header = document.querySelector('header')

    const runnerMove = (item) => {
      runner.style.left = item.offsetLeft + 'px'
      runner.style.width = item.offsetWidth + 'px'
    }

    const mouseMove = ({ target }) => {
      if (target.classList.contains(styles.nav_item)) runnerMove(target)
      else runnerMove(items[itemId])
    }

    runnerMove(items[itemId])
    header.addEventListener('mousemove', mouseMove)
    return () => header.removeEventListener('mousemove', mouseMove)
  }, [itemId])

  return (
    <header className={styles.header_container} id="header">
      <div className={`${styles.header} container`}>
        <Logo />

        <nav
          className={`${styles.nav} ${isOpen ? styles.active : ''}`}
          ref={menuRef}
        >
          <span className={styles.runner} id="runner"></span>
          <button
            className={styles.button_close}
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoClose className={styles.close_icon} />
          </button>
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item
            }
            onClick={() => {
              setItemId(0)
              setIsOpen(false)
            }}
          >
            ГЛАВНАЯ
          </NavLink>
          <NavLink
            to="insurance"
            className={({ isActive }) =>
              isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item
            }
            onClick={() => {
              setItemId(1)
              setIsOpen(false)
            }}
          >
            СТРАХОВАНИЕ
          </NavLink>
          <NavLink
            to="how-we-work"
            className={({ isActive }) =>
              isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item
            }
            onClick={() => {
              setItemId(2)
              setIsOpen(false)
            }}
          >
            КАК РАБОТАЕМ
          </NavLink>
          <NavLink
            to="useful-info"
            className={({ isActive }) =>
              isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item
            }
            onClick={() => {
              setItemId(3)
              setIsOpen(false)
            }}
          >
            ПОЛЕЗНОЕ
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) =>
              isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item
            }
            onClick={() => {
              setItemId(4)
              setIsOpen(false)
            }}
          >
            КОНТАКТЫ
          </NavLink>
        </nav>
        <div className={styles.mobile_menu}>
          <span className={styles.menu_text}>МЕНЮ |</span>
          <button
            className={styles.button_menu}
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMenu className={styles.button_menu_icon} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

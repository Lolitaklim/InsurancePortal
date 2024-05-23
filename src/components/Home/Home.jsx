import styles from './Home.module.css'
import { Parallax } from 'react-parallax'
import MainImage from './../../assets/main-image.jpg'
import { Typewriter, Cursor } from 'react-simple-typewriter'

function Home() {
  // const { text } = useTypewriter({
  //   words: ['транспорта', 'ответственности', 'имущества', 'жизни', 'здоровья'],
  //   loop: {},
  //   typeSpeed: 50,
  // })
  return (
    <div className={`${styles.home} `}>
      <Parallax
        strength={100}
        blur={{ min: -15, max: 15 }}
        bgImage={MainImage}
        bgImageAlt="Главное изображение Все виды страхования"
        bgImageStyle={{
          height: 'calc(var(--aspect-ratio) * 100vw)',
          width: '100vw',
        }}
      >
        <div className={styles.content}>
          <h1 className={styles.title}>
            Компания В-В-С — эксперт в области страхования{' '}
            <Typewriter
              words={[
                'транспорта',
                'ответственности',
                'имущества',
                'жизни',
                'здоровья',
              ]}
              loop={false}
            />{' '}
            <Cursor cursorColor="#8f2e2b" />
          </h1>
          <p className={styles.main_text}>
            Мы с легкостью подберем для Вас самые выгодные страховые продукты
            без дополнительных затрат.
          </p>
          <button className={`${styles.button_service} ${styles.buttons}`}>
            Ознакомиться с услугами
          </button>
          <button className={`${styles.button_contacts} ${styles.buttons}`}>
            Контакты
          </button>
        </div>
      </Parallax>

      <p>
        Мы являемся представителями крупных и надежных страховых компаний, это
        позволяет нам предложить своим клиентам самые лучшие условия на рынке
        страхования. С радостью предлагаем Вам широчайший спектр страховых
        услуг! Наши специалисты с удовольствием проконсультируют по всем
        вопросам страхования, предоставят квалифицированную помощь при
        оформлении страхового полиса, независимо от вида страхования, будь это
        обязательное страхование ОСАГО, страхование имущества, как движимого так
        и не движимого, страхование жизни и здоровья и многое другое!
        Обратившись к нам Вы получите не только качественно оказываемые услуги
        страхования, высокий уровень сервиса, но так же мы заботимся о создании
        комфортных условий сотрудничества с каждым клиентом индивидуально. Мы
        предлагаем нашим клиентам действительно выгодные страховые программы в
        индивидуальном порядке. Выбор страховой компании всегда остается за
        Вами, мы же подбираем наиболее оптимальную программу страхования.
      </p>
      <div className={styles.content}></div>
    </div>
  )
}

export default Home

import React, { useState, useEffect } from 'react'
import { dinonew, mPohar, slogan } from '../static'
import {Link} from 'react-router-dom'
import styles from '../style'

function Kontakt() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className={`${styles.slogan} ${styles.appear_home_slogan} ${!isLoading ? 'opacity-100' : ''}`}>
          <img src={slogan} alt="Slogan: Kolik sportů umíš, tolikrát jsi člověkem!" className="w-[95%] sm:w-[85%] mt-5 sm:mt-0" />
        </div>


      <div className="flex-col sm:flex-row flex justify-center z-0">

        <div className="w-full sm:w-1/2">
        <Link to="/deti">
            <button className={`${styles.buttons_home} ${styles.appear_home_buttons} ${!isLoading ? 'opacity-100' : ''} mx-auto`}>
              <img
                src={dinonew}
                alt="First Button"
                className="w-80 h-80 transition duration-300 transform hover:scale-110 hover:shadow-lg"
              />
            </button>
          </Link>

          <div className={`${styles.card_home} bg-orange ${styles.appear_home_cards} ${!isLoading ? 'opacity-100' : ''} mx-auto`}>
            <h1 className={`${styles.heading1}`}>Kroužek</h1>
            <p className={`${styles.paragraph} text-center`}>
              Multisportovec z.s. přichází s myšlenkou, která v České republice nemá obdoby.
              Rozjíždíme kroužek, na kterém si děti vyzkouší největší možnou škálu sportů.
              Od kvalifikovaných trenérů se jim dostane té nejlepší péče.
              Během 9 měsíců dostanou do povědomí více, než 16 sportů, které by měl každý multisportovec umět.
              Našim cílem je děti naučit nejen základy v daných sportech, ale hlavně v nich probudit lásku ke sportu.
              Ta se bohužel díky rozvíjejícím se technologiím a síle počítačů vytrácí.
              Víme, že pohyb je zdravý a tuto znalost předáváme dál.
              Rozmanitost sportů v dětech vyvine chuť učit se novým věcem, která se každému v životě hodí.
            </p>
          </div>

          <div className="flex items-center justify-center">
          <Link to="/krouzek_prihlaska">
            <button className={`${styles.button_krouzek}`} type="submit">
              PODAT PŘIHLÁŠKU
            </button>
          </Link>
          </div>

        </div>

        <div className="w-full sm:w-1/2 my-10 sm:my-0">
        <Link to="/dospeli">
            <button className={`${styles.buttons_home} ${styles.appear_home_buttons} ${!isLoading ? 'opacity-100' : ''} mx-auto`}>
              <img
                src={mPohar}
                alt="Second Button"
                className="w-80 h-80 rounded-full transition duration-300 transform hover:scale-110 hover:shadow-lg"
              />
            </button>
          </Link>

          <div className={`${styles.card_home} bg-[#6ba0ea] ${styles.appear_home_cards} ${!isLoading ? 'opacity-100' : ''} mx-auto`}>
            <h1 className={`${styles.heading1}`}>Eventy</h1>
            <p className={`${styles.paragraph} text-center`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec iaculis gravida nulla.
              Vivamus porttitor turpis ac leo. Duis risus. Mauris tincidunt sem sed arcu.
              Pellentesque pretium lectus id turpis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Integer lacinia. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.
              Fusce aliquam vestibulum ipsum. In laoreet, magna id viverra tincidunt, sem odio bibendum justo,
              vel imperdiet sapien wisi sed libero. Phasellus faucibus molestie nisl.
              Etiam egestas wisi a erat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
              quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Etiam dictum tincidunt diam.
              Sed convallis magna eu sem. Quisque tincidunt scelerisque libero. Etiam sapien elit,
              consequat eget, tristique non, venenatis quis, ante.
            </p>
          </div>

          <div className="flex items-center justify-center">
          <Link to="/event_prihlaska">
            <button className={`${styles.button_event}`} type="submit">
              PODAT PŘIHLÁŠKU
            </button>
            </Link>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default Kontakt;

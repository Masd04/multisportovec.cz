import React from 'react'
import styles from '../style'
import {Link} from 'react-router-dom'

function Dospeli() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>

    <div className={`${styles.marginX} ${styles.marginT} flex-1 `}>
      
      <div className={`${styles.heading1}`}>
        Eventy
      </div>
      <p className={`${styles.paragraph} text-black my-12 ss:mx-52 text-center sm:text-center`}>
        Pracujeme na tom...
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
  )
}

export default Dospeli

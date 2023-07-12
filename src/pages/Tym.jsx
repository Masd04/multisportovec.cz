import React from 'react'
import styles from '../style'
import { ppl1, ppl2, ppl3 } from '../static'

function Tym() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>

    <div className={`${styles.marginX} ${styles.marginT} flex-1`}>
      
      <div className={`${styles.heading1}`}>
        Trenérský tým
      </div>
      <p className={`${styles.paragraph} text-black mt-6 mb-14 ss:mx-52 text-center sm:text-center`}>
        Naši trenéři jsou klasifikovaní specialisté,
        Studenti Karlovy Univerzity,
        Fakulty tělesné výchovy a sportu.
        Na jednotlivé tréninkové bloky máme
        připravené trenéry a trenérky, kteří jsou
        specializováni na daný sport.
      </p>
      </div>


      <div className={`flex flex-col sm:flex-row flex-wrap w-full mb-8 items-center justify-evenly`}>

        <div className={`${styles.card_trener}`}>
          <img src={ppl1} alt="avatar" className="w-44 mx-auto" />
          <h1 className={`${styles.tymH1} `}>První Trenér</h1>
          <p className={`${styles.paragraphTym}`}>
            Náš první trenér je fakt dobrej trenér. Učil se trénovat od nejlepších na vytříbené fakultě FTVS.
            Co dál no je to prostě fakt expert a Vaše děti budou v nejlepších možných rukou.
            Tento trenér je přesně ten, kdo z Vašich ratolestí vychová MULTISPORTOVCE!
            <br />
            <span className="font-bold">+420 123 456 789</span>
          </p>
        </div>
        <div className={`${styles.card_trener}`}>
          <img src={ppl2} alt="avatar" className="w-44 mx-auto" />
          <h1 className={`${styles.tymH1} `}>Druhý Trenér</h1>
          <p className={`${styles.paragraphTym}`}>
          Náš první trenér je fakt dobrej trenér. Učil se trénovat od nejlepších na vytříbené fakultě FTVS.
            Co dál no je to prostě fakt expert a Vaše děti budou v nejlepších možných rukou.
            Tento trenér je přesně ten, kdo z Vašich ratolestí vychová MULTISPORTOVCE!
            <br />
            <span className="font-bold">+420 123 456 789</span>
          </p>
        </div>
        <div className={`${styles.card_trener}`}>
          <img src={ppl3} alt="avatar" className="w-44 mx-auto" />
          <h1 className={`${styles.tymH1} `}>Třetí Trenér</h1>
          <p className={`${styles.paragraphTym}`}>
          Náš první trenér je fakt dobrej trenér. Učil se trénovat od nejlepších na vytříbené fakultě FTVS.
            Co dál no je to prostě fakt expert a Vaše děti budou v nejlepších možných rukou.
            Tento trenér je přesně ten, kdo z Vašich ratolestí vychová MULTISPORTOVCE!
            <br />
            <span className="font-bold">+420 123 456 789</span>
          </p>
        </div>
       
       
        
      </div>  

  

    

  </div>
  )
}

export default Tym
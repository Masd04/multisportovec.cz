import React from 'react'
import styles from '../style'
import { facebook, instagram, signature, textlessmpohar } from '../static'
//  Fonts:
import '@fontsource-variable/rubik'
import '@fontsource-variable/mulish'


const Footer = () => {
  return (
    <section className={`${styles.paddingY1} flex-col`}>

      {/*   Pokud chci logotext doleva -> sm:block  */}
      <div className="flex justify-between items-center">
        <a href="/"><img src={textlessmpohar} alt="Loho pohár v kruhu" className="w-[40px] object-contain hover:scale-110" /></a>
        <a href="/"><img src={textlessmpohar} alt="Loho pohár v kruhu" className="w-[40px] object-contain hover:scale-110" /></a>
      </div> 

      <div className={`${styles.footerLine}`}></div>

      <div className={`flex flex-wrap w-full mt-5 mb-8 xs:ml-4 ss:ml-12 sm:ml-15 ml-12 justify-evenly`}>

        <div className="w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2">
          <h1 className={`${styles.footerH1} text-white font-medium ml-5`}>Adresa:</h1>
          <p className={`${styles.footerText} text-white font-medium ml-5`}>
            Ulice a č. popisné <br />
            Město <br />
            00000 <br />
          </p>
        </div>
        <div className="w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2">
          <h1 className={`${styles.footerH1} text-white font-medium ml-5`}>Kontakt:</h1>
          <p className={`${styles.footerText} text-white font-medium ml-5`}>
            Viktor Martínek <br />
            +420 602 724 543 <br />
            vi.ma2525@gmail.com <br />
          </p>
        </div>
        
        <div className="w-full xs:w-1/2 ss:w-1/2 sm:w-1/2 lg:w-1/4 flex flex-col justify-start p-2">
          <a href="https://www.facebook.com/multisportovec" target="_blank">
          <img src={facebook} alt="FB icon" className={`${styles.footerIcon1}`} />
          </a>
          <a href="https://www.instagram.com/multisportovec/" target="_blank">
          <img src={instagram} alt="IG icon" className={`${styles.footerIcon}`} />
          </a>
        </div>
        
      </div>

      <div className={`${styles.footerLine1}`}></div>

      <div className="flex justify-center">
        <img src={signature} alt="Signature" className="w-[20%] sm:w-[6%]"/>
      </div>

    </section>
  )
}


export default Footer
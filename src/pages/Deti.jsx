import React from 'react'
import styles from '../style'
import {Link} from 'react-router-dom'

function Deti() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>

    <div className={`${styles.marginX} flex-1 `}>
      
      <div className={`${styles.heading1}`}>
        Kroužek
      </div>
      <p className={`${styles.paragraph} text-black my-12 ss:mx-52 text-center sm:text-left`}>
          Multisportovec z.s. přichází s myšlenkou, která v České
          republice nemá obdoby.
          Rozjíždíme kroužek, na kterém si děti vyzkouší největší
          možnou škálu sportů.
          Od kvalifikovaných trenérů se jim dostane té nejlepší
          péče.
          Během 9 měsíců dostanou do povědomí více, než 16
          sportů, které by měl každý multisportovec umět.
          Našim cílem je děti naučit nejen základy v daných
          sportech, ale hlavně v nich probudit lásku ke sportu.
          Ta se bohužel díky rozvíjejícím se technologiím a síle
          počítačů vytrácí.
          Víme, že pohyb je zdravý a tuto znalost předáváme dál.
          Rozmanitost sportů v dětech vyvine chuť učit se novým
          věcem, která se každému v životě hodí. 
      </p>
      <p className={`${styles.paragraph} text-black my-12 ss:mx-52 text-center sm:text-left`}>
          Cílem našeho programu je všeobecný rozvoj sportovní
          všestrannosti u dětí základních škol. Chceme využít jejich
          mladého věku, kdy mohou vnímat veškeré informace v plném
          rozsahu. Zároveň máme možnost vsugerování zdravého
          životního stylu, který může hravě předejít jejich případným
          zdravotním problémům v budoucnu.
          Díky všestrannosti si budou moci vybrat sportovní odvětví, které
          je bude bavit nejvíce, nebo poznají, že každý sport má svoji krásu
          a budou se nadále rozvíjet ve více směrech.
          Myšlenkou našeho projektu není primárně vytrénovat
          profesionální sportovce, ale udělat z dětí, které v dnešní době
          tíhnou spíše k počítačům, opět soutěživé a cílevědomé lidi.
          Sport má obrovskou sílu v lidech budovat vůli, odhodlání,
          soutěživost a mnoho dalších pozitivních vlastností.
          Také je naučí, že nic není zadarmo. Když chce člověk něčeho
          dosáhnout, nebo se něco naučit, vždy za tím stojí práce.
          Náš trenérský tým je schopen dětem tuto práci podat zábavnou
          formou a tím nejlepším možným způsobem. 
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
  )
}

export default Deti
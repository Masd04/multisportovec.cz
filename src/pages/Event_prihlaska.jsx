import React from 'react'
import styles from '../style'
import emailjs from '@emailjs/browser';

function Event_prihlaska() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>

      <div className={`${styles.marginX} flex-1 `}>
        
        <div className={`${styles.heading1}`}>
          Přihláška na Event
        </div>
        <div className="font-poppins font-medium text-[18px] leading-[30.8px] text-center">
          Datum konání: XX.XX.2023
        </div>
        
        


        <div className="mt-7 flex items-top justify-center">
        <form className="bg-poharBlue shadow-md rounded-l px-8 pt-6 pb-8 mb-4 w-[95%] sm:w-3/4">

          <div className="mb-4 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-black text-lg      font-bold mb-2" htmlFor="playerFirstName">
                Jméno
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="playerFirstName" name="playerFirstName" type="text" placeholder="Jméno" required />
            </div>

          <div>
            <label className="block text-black text-lg      font-bold mb-2" htmlFor="playerLastName">
              Přijmení
            </label>
            <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="playerLastName" name="playerLastName" type="text" placeholder="Přijmení" required />
          </div>        

          <div>
            <label className="block text-black text-lg      font-bold mb-2" htmlFor="dateOfBirth">
              Datum narození
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="dateOfBirth" name="dateOfBirth" type="date" placeholder="Datum narození" required />
          </div>

          <div>
            <label className="block text-black text-lg      font-bold mb-2" htmlFor="address">
              Bydliště
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="address" name="address" type="text" placeholder="Bydliště" required />
          </div>
    
          <div>
            <label className="block text-black text-lg      font-bold mb-2" htmlFor="phone">
              Telefon
           </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="phone" name="phone" type="tel" placeholder="Telefon" required />
         </div>

          <div className="mb-6">
            <label className="block text-black text-lg      font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email" name="email" type="email" placeholder="Email" required />
          </div>

    </div>


      <div className="flex items-center justify-center">
      <button className={`${styles.button_event_p}`} type="submit">
        Odeslat
      </button>
      </div>
     </form>
          

      </div>       


      </div>

     </div>
  )
}

export default Event_prihlaska

import React from 'react'
import styles from '../style'
import emailjs from '@emailjs/browser';

function Krouzek_prihlaska() {
  return (
    <div className={`${styles.padingX} ${styles.flex}`}>

      <div className={`${styles.marginX} flex-1 `}>
        
        <div className={`${styles.heading1}`}>
          Přihláška na Kroužek
        </div>
        
        


        <div className="mt-7 flex items-top justify-center">
        <form className="bg-orange shadow-md rounded-l px-8 pt-6 pb-8 mb-4 w-[95%] sm:w-3/4">

          <div className="mb-4 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="playerFirstName">
                Jméno sportovce
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="playerFirstName" name="playerFirstName" type="text" placeholder="Jméno sportovce" required />
            </div>

          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="playerLastName">
              Přijmení sportovce
            </label>
            <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="playerLastName" name="playerLastName" type="text" placeholder="Přijmení sportovce" required />
          </div>        

          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="dateOfBirth">
              Datum narození
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dateOfBirth" name="dateOfBirth" type="date" placeholder="Datum narození" required />
          </div>

          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="address">
              Bydliště
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address" name="address" type="text" placeholder="Bydliště" required />
          </div>


          <div>
           <label className="block text-gray-700 text-lg       font-bold mb-2" htmlFor="parentFirstName">
              Jméno rodiče
           </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="parentFirstName" name="parentFirstName" type="text" placeholder="Jméno rodiče" required />
          </div>
          <div>
           <label className="block text-gray-700 text-lg       font-bold mb-2" htmlFor="parentLastName">
             Přijmení rodiče
           </label>
           <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="parentLastName" name="parentLastName" type="text" placeholder="Přijmení rodiče" required />
          </div>
    
          <div>
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="phone">
              Telefon
           </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone" name="phone" type="tel" placeholder="Telefon" required />
         </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg      font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" name="email" type="email" placeholder="Email" required />
          </div>

    </div>


      <div className="flex items-center justify-center">
      <button className={`${styles.button_krouzek_p}`} type="submit">
        Odeslat
      </button>
      </div>
     </form>
          

      </div>       


      </div>

     </div>
  )
}

export default Krouzek_prihlaska

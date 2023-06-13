const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    buttons_home: "flex items-center justify-center bg-transparent border-none focus:outline-none flex-shrink-0",

    card_home: "w-[95%] sm:mx-6 my-4 px-8 pb-6 rounded-3xl shadow-xl",

    appear_home_buttons: "opacity-0 transition-opacity duration-2000 ease-in-out",
    appear_home_cards: "opacity-0 transition-opacity duration-3500 ease-in-out",
  
    heading1: "font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full text-center",
    headingDeti: "font-poppins font-semibold xs:text-[48px] text-[40px] text-orange xs:leading-[76.8px] leading-[66.8px] w-full text-center",
    paragraph: "font-poppins font-normal text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-14 py-12",
    paddingY1: "sm:pb-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    footerH1: "text-2xl mb-2",
    footerIcon: "w-[20%] p-3 mt-1 ml-20 scale-100 hover:scale-125 lg:p-1 lg:mt-1 md:p-6 md:mt-0 sm:p-4 sm:mt-0 ss:p-1 ss:mt-3 xs:p-0 xs:mt-6",
  
    hover: "scale-100 hover:scale-110"
};
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
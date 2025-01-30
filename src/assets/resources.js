const media = {
    //images
    logo : new URL('./images/mainlogo.png', import.meta.url).href,
    logoIcon : new URL('./images//mainlogo.png', import.meta.url).href,
    wlogo : new URL('./images/wbook.png', import.meta.url).href,
    food : new URL('./images/rptgtpxd-1396254731.avif', import.meta.url).href,
    coverhome : new URL('./images/images', import.meta.url).href,

    //Icons
    cart:new URL('./icons/cart.svg',import.meta.url).href,
    plus:new URL('./icons/plus.svg',import.meta.url).href,
    minus:new URL('./icons/minus.svg',import.meta.url).href,
  }




const {logo,food,wlogo,cart,plus,minus,logoIcon,coverhome} = media
export {logo,food,wlogo,cart,plus,minus,logoIcon,coverhome}
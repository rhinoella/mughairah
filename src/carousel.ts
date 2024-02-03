const carousel = document.querySelector<HTMLElement>("#carousel")!;
const carouselItems = document.querySelectorAll<HTMLDivElement>("#carousel > div");
let carouselIndex = 0;

let transitionEndType = (() => {
  let el = <HTMLElement>document.createElement('fakeelement');
  let transitions = {
    'transition':'transitionend',
    'OTransition':'oTransitionEnd',
    'MozTransition':'transitionend',
    'WebkitTransition':'webkitTransitionEnd'
  }

  for(let t in transitions){
      if( el.style[t] !== undefined ){
          return transitions[t];
      }
  }
})();

carouselItems.forEach((item: HTMLDivElement) => {
  item.classList.add("hidden");
  item.addEventListener(transitionEndType, () => { 
    hideCarouselItem(item); 
  }, false);
});

const showCarouselItem = (element: HTMLElement) => {
  if(element.classList.contains("fade")) {
    element.classList.remove("hidden");
    element.classList.add("invisible");
    element.classList.add("flex");
    element.classList.remove("invisible");
    setTimeout(()=>{
      element.classList.remove("fade");
    }, 100)
  }
  else
  {
    element.classList.add("fade");
  }}

const hideCarouselItem = (element: HTMLElement) => {
  if(element.classList.contains("fade")) {
    element.classList.remove("flex");
    element.classList.add("hidden");
    carouselIndex++;
    if (carouselIndex == carouselItems.length) carouselIndex = 0; 
    showCarouselItem(carouselItems[carouselIndex]);
  }
  else {
    setTimeout(() => {
      showCarouselItem(carouselItems[carouselIndex]);
    }, 3000);
  }
}

showCarouselItem(carouselItems[carouselIndex]);




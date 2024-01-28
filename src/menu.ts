const sandwich = document.querySelector<HTMLButtonElement>("#sandwich")!;
const menuBar = document.querySelector<HTMLElement>("#menu")!;
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link")!;

const showItem = (element: HTMLElement) => {
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
  }
}

const hide = (element: HTMLElement) => {
  if( element.classList.contains("fade")) {
    element.classList.remove("flex");
    element.classList.add("hidden");
  }
}

sandwich.addEventListener("click", () => { showItem(menuBar); }, false);

navLinks.forEach((link: HTMLAnchorElement) => {
  link.addEventListener("click", () => { showItem(menuBar); }, false);
});

menuBar.addEventListener(transitionEndType, () => { hide(menuBar); }, false);
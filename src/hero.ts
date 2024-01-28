const heroImagePath: string = "../public/hero/";
const heroImages: Array<HTMLImageElement> = [];
const hero = document.querySelector<HTMLDivElement>("#hero-img")!;

const getImg = (index: number) => {
  return(`${heroImagePath}${index}.jpg`);
}

for (let i = 1; i < 115; i++) {
  let img = new Image();
  img.src = getImg(i);
  heroImages.push(img)
}

hero.style.backgroundImage = `url(${getImg(1)})`;

window.addEventListener("scroll", () => {
  if(heroImages[(115 + window.scrollY ) % 114] != undefined) {
    hero.style.backgroundImage = `url(${heroImages[(115 + window.scrollY ) % 114].src})`;
  }
});
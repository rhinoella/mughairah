const heroImagePath: string = "../public/hero/";
const heroImages: Array<HTMLImageElement> = [];

const getImg = (index: number) => {
  return(`${heroImagePath}${index}.jpg`);
}

for (let i = 1; i < 115; i++) {
  let img = new Image();
  img.src = getImg(i);
  heroImages.push(img)
}

const hero = document.querySelector<HTMLDivElement>("#hero-img")!;
hero.style.backgroundImage = `url(${heroImages[(115 + window.scrollY ) % 114].src})`;

window.addEventListener("scroll", () => {
  if(heroImages) {
    hero.style.backgroundImage = `url(${heroImages[(115 + window.scrollY ) % 114].src})`;
  }
});

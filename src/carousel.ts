const carouselItems = [
  `
  <div id="carousel-0" class="flex flex-col gap-5">
  <h3 class="text-md tracking-tight font-semibold">FEATURED</h3>
  <br>
  <h2 class="text-2xl">The first GCC national to join UK Research and Innovation.</h2>
  <div class="flex flex-row font-extralight gap-5">
    <div class="border-b text-center whitespace-nowrap flex flex-row gap-1 text-slate-300 hover:text-white">
      <img src="./public/icons/external-link.svg" width="12" class="inline">
      <a target="_blank" rel="noopener noreferrer"
        href="https://www.muscatdaily.com/2023/10/16/breaking-barriers-omani-teen-first-from-gcc-to-join-ukri/"
        class="inline">Muscat Daily
      </a>
    </div>
    <div class="border-b text-center whitespace-nowrap flex flex-row gap-1 text-slate-200 hover:text-white">
      <img src="./public/icons/external-link.svg" width="12" class="inline">
      <a target="_blank" rel="noopener noreferrer"
        href="https://www.omanobserver.om/article/1144315/business/economy/young-omani-scientist-is-first-gcc-national-to-be-employed-by-top-uk-research-centre"
        class="inline">Oman Observer
      </a>
    </div>
  </div>
  `,
  `
  <div id="carousel-1" class="flex flex-col gap-5">
        <h3 class="text-md tracking-tight font-semibold">UPCOMING BOOK</h3>
        <br>
        <div class="px-4">
          <h2 class="text-3xl font-semibold">Seif Flight
          </h2>
          <h3 class="text-2xl font-light">
            The Story of My Father, Seif Al
            Mugheiry
          </h3>
        </div>
        <br>
        <a href="#seif-flight">
          <img src="./public/icons/down-caret.svg" width="12" class="mx-auto">
        </a>
      </div>
  `,
]

const carousel: HTMLElement = document.querySelector<HTMLElement>("#carousel")!;
let carouselIndex = 0

const rotateCarousel = async (index: number) => {
  carousel.innerHTML = carouselItems[index];
}

rotateCarousel(0)

let intervalId = setInterval(() => {
  rotateCarousel(carouselIndex);
  if (carouselIndex < carouselItems.length - 1) {
    ++carouselIndex;
  }
  else {
    carouselIndex = 0;
  }
}, 4000);
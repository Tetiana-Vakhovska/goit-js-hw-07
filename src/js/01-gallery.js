import { galleryItems } from './gallery-items.js';
// Change code below this line
const listItem = document.querySelector(".gallery");
const cardsMarkup = createColorCardsMarkup;
paletteConteiner.insertAdjacentHTML(`beforeend`, cardsMarkup);
paletteConteiner.addEventListener(`click`, onPaletteContainerClick);
function createColorCardsMarkup(color) {
    return colors
        .map(({ hex, rgb }) => {
            return `<div class="color-card">
    <div> <div><div><div class ="color-swatch"
    data-hex="${hex}>"
   data-rgb="${rgb}>"
   style="background-color:${hex}">
   </div> </div> </div> </div>
   <div class"color-meta">
   <p> HEX:${hex}</p>
    <p> RGB:${rgb}</p>
     </div> </div>
   `;
        })
        .join(``);
}


  

const cardListItem = ({ src, alt }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
        />
        </a>
</div>`;
};
const cardListItemNew = images.map(cardListItem).join("");

listItem.insertAdjacentHTML("beforeend", cardListItemNew);
console.log(cardListItemNew);
function onPaletteContainerClick(evt) {
    const isColorSwatchEl = evt.target.classList.contains(`.color-swatch`);
    if (!isColorSwatchEl) { return; }
    const currentActiveCard = document.querySelector(`.color-card.is-active`);
    if (currentActiveCard) {
        currentActiveCard.classList.remove(`is-active`);
    }
    const swathcEl = evt.target;
    const parentColorCard = swathcEl.closest(`.color-card`);
    parentColorCard.classList.add(`is-active`);
    document.body.style.backgroundColor = swathcEl.dataset.hex;
        }
console.log(galleryItems);

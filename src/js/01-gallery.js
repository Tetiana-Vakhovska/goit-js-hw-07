import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const listItem = document.querySelector(".gallery");

const cardListItem = ({ original, preview, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
        <img
        src="${ preview}",
          alt="${description}",
          class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
        />
        </a>
</div>`;
};
const cardListItemNew = galleryItems.map(cardListItem).join("");
const cardsMarkup = cardListItem (galleryItems);

listItem.addEventListener(`click`, onPaletteContainerClick);

listItem.insertAdjacentHTML("beforeend", cardListItemNew);
console.log(cardListItemNew);
  


function onPaletteContainerClick(evt) {
    const isColorSwatchEl = evt.target.classList.contains(`.color-swatch`);
   
  removeActiveClass();
    const swathcEl = evt.target;
    const parentColorCard = swathcEl.closest(`.color-card`);
 
  addActiveCardClass(parentColorCard);
    document.body.style.backgroundColor = swathcEl.dataset.hex;
}
function removeActiveClass() {
   const currentActiveCard = document.querySelector(`.color-card.is-active`);
    if (currentActiveCard) {
        currentActiveCard.classList.remove(`.is-active`);
    }
}
function addActiveCardClass(card) {
  card.classList.add(`.is-active`);
}
console.log(galleryItems);

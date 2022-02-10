import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const listItem = document.querySelector(".gallery");
const cardListItem = ({ original, preview, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${ preview}"
        data-source="${original}"
          alt="${description}"
        />
        </a>
</div>`;};
const cardListItemNew = galleryItems.map(cardListItem).join("");
const cardsMarkup = cardListItem (galleryItems);
listItem.addEventListener(`click`, onPaletteContainerClick);
listItem.insertAdjacentHTML("beforeend", cardListItemNew);
console.log(cardListItemNew); 
function onPaletteContainerClick(evt) {
  evt.preventDefault()
const instance =basicLightbox.create(`<img href="${evt.target.dataset.source}" width="800" heigth="600`)
}



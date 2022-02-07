import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const listItem = document.querySelector(".gallery");
const cardListItem = ({ original, preview, description }) => {
    return `<a class="gallery__item" href="${original}"">
  <img class="gallery__image" src="${ preview}" alt="${description}" />
</a>`};
const cardListItemNew = galleryItems.map(cardListItem).join("");
const cardsMarkup = cardListItem (galleryItems);
listItem.addEventListener(`click`, onPaletteContainerClick);
listItem.insertAdjacentHTML("beforeend", cardListItemNew);
console.log(cardListItemNew); 
function onPaletteContainerClick(evt) {
    evt.preventDefault()
   
}
 let instance= SimpleLightbox('.gallery',{captionsData:'alt', captionDelay:250});
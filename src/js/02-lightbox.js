import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const listItem = document.querySelector(".gallery");
const lightbox = document.createElement('div.gallery');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
open.simplelightbox
const cardListItem = ({ original, preview, description }) => {
    return `<a class="gallery__item"  href="${original}"">
  <img class="gallery__image" src="${ preview}" alt="${description}" />
</a>`};
const cardListItemNew = galleryItems.map(cardListItem).join("");
listItem.addEventListener(`click`, onPaletteContainerClick);
listItem.insertAdjacentHTML("beforeend", cardListItemNew);
cardListItemNew.insertAdjacentHTML("beforeend",lightbox)
function onPaletteContainerClick(evt) {
  evt.preventDefault()   
}console.log(lightbox);

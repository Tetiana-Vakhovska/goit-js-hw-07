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
function onPaletteContainerClick(evt) {
  evt.preventDefault()
    let gallery = new SimpleLightbox('.gallery a', {
  captionsData: `alt`, captiondelay: 250,
  captionPosition:bottom
});
}





import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const listItem = document.querySelector(".gallery");

const cardListItemNew = galleryItems.map(cardListItem).join("");
const cardsMarkup = cardListItem (galleryItems);
listItem.addEventListener(`click`, onPaletteContainerClick);
listItem.insertAdjacentHTML("beforeend", cardListItemNew);


function onPaletteContainerClick(evt) {
  evt.preventDefault()
}
//let gallery = new SimpleLightbox('.gallery a', {
 //captionsData: `alt`, captiondelay: 250,
  //captionPosition:bottom
//});

console.log(lightbox);
var gallery = $('.gallery a').simpleLightbox();
console.log(gallery);
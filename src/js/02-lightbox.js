import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const listItem = document.querySelector(".gallery");
const cardListItem = ({ original, preview, description }) => {
    return `<div class="gallery"><a class="gallery__item" data-lightbox="images" href="${original}"">
  <img class="gallery__image" src="${ preview}" alt="${description}" />
</a></div>`};

const cardListItemNew = galleryItems.map(cardListItem).join("");
const cardsMarkup = cardListItem(galleryItems);
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
listItem.addEventListener(`click`, onPaletteContainerClick);
listItem.insertAdjacentHTML("beforeend", cardListItemNew);
function onPaletteContainerClick(evt) {
  evt.preventDefault()
    
}


let gallery = new SimpleLightbox('.gallery a', {
  captionsData: `alt`, captiondelay: 250,
  captionPosition:bottom
});


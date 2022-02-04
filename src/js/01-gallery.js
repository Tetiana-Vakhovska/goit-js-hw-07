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
</div>`;};
const cardListItemNew = galleryItems.map(cardListItem).join("");
const cardsMarkup = cardListItem (galleryItems);
listItem.addEventListener(`click`, onPaletteContainerClick);
listItem.insertAdjacentHTML("beforeend", cardListItemNew);
console.log(cardListItemNew); 
function onPaletteContainerClick(evt) {
  evt.preventDefaul();
  for (let i = 0; i < galleryItems.length; i++) { }
  if (evt.target.dataset.sourge === galleryItems[i].original) {
    const modal = basicLightbox.create(`<img src='${galleryItems[i].original}' alt='${galleryItems[i].description}'/>`);
  }
  modal.show();
  setTimeout(() => { modal.close(); }, 4000);
}




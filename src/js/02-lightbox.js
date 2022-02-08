import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const listItem = document.querySelector(".gallery");
const cardListItem = ({ original, preview, description }) => {
    return `<a class="gallery__item"  href="${original}"">
  <img class="gallery__image" src="${ preview}" alt="${description}" />
</a>`};
const cardListItemNew = galleryItems.map(cardListItem).join("");
listItem.addEventListener(`click`, onPaletteContainerClick);
listItem.insertAdjacentHTML("beforeend", cardListItemNew);
function onPaletteContainerClick(evt) {
  evt.preventDefault()   
}console.log(cardListItemNew);
const lightbox = document.createElement('div.gallery');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click',
    e => {
      lightbox.classList.add('active')
      const img = document.createElement('img')
      img.scr = image.scr;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
      }
    lightbox.appendChild(img)
    })
})
lightbox.addEventListener('click',
  e => { if(e.target!==e.currentTarget) return
  lightbox.classList.remove('active')
})

console.log(lightbox);

import { galleryItems } from './gallery-items.js';
// Change code below this line

const ref = {
  galleryListHtml: document.querySelector('.gallery'),
  galleryImageLigthBox: document.querySelector('body')
}
ref.galleryImageLigthBox.addEventListener('clic', tupGalleryItemCard)
function galleryItemCard (lightbox) {
  return lightbox.map(e => {
    return `<a  class="gallery__item" href="${e.original}">
        <img
          class="gallery__image"
          src="${
          e.preview}"
          alt="${e.description}"
        />
      </a>`
  })
  .join('')
}
ref.galleryListHtml.insertAdjacentHTML('beforeend', galleryItemCard(galleryItems));
function tupGalleryItemCard(e) {
  if (e.target.nodeName === 'IMG') {
    e.preventDefault()
    new SimpleLightbox('.gallery a', {
      captionsData: 'alt', captiondelay: 250,
      
    });

  }
}

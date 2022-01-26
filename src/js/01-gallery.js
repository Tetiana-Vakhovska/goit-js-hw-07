import { galleryItems } from './gallery-items.js';
// Change code below this line
const paletteConteiner = document.querySelector(`#`);
const cardsMarkup = createColorCardsMarkup;
paletteConteiner.insertAdjacentHTML(`beforeend`, cardsMarkup);
paletteConteiner.addEventListener(`click`, onPaletteContainerClick);
function createColorCardsMarkup(color) {
    return colors
        .map(({ hex, rgb }) => {
            return `<div class="color-card">
    <div> <div><div><div class ="color-swatch"
    data-hex="${hex}>"
   data-rgb="${rgb}>"
   style="background-color:${hex}">
   </div> </div> </div> </div>
   <div class"color-meta">
   <p> HEX:${hex}</p>
    <p> RGB:${rgb}</p>
     </div> </div>
   `;
        })
        .join(``);
}
function onPaletteContainerClick(evt) {
    const isColorSwatchEl = evt.target.classList.contains(`.color-swatch`);
    if (!isColorSwatchEl) { return; }
    const currentActiveCard = document.querySelector(`.color-card.is-active`);
    if (currentActiveCard) {
        currentActiveCard.classList.remove(`is-active`);
    }
    const swathcEl = evt.target;
    const parentColorCard = swathcEl.closest(`.color-card`);
    parentColorCard.classList.add(`is-active`);
    document.body.style.backgroundColor = swathcEl.dataset.hex;
        }
console.log(galleryItems);

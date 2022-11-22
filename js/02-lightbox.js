import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galleryItemsMarkup = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
jjjjjjlll;

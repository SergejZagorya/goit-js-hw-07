import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galleryItemsMarkup = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

galleryEl.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  const instance = basicLightbox.create(`<img src=${e.target.dataset.source} />`, {
    onShow: () => {
      document.addEventListener("keydown", onEscape);
    },

    onClose: () => {
      document.removeEventListener("keydown", onEscape);
    },
  });
  instance.show();

  function onEscape(e) {
    if (e.key === "Escape") instance.close();
  }
}

// console.log(galleryItems);

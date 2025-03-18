import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';

const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGalleryMarkup(images) {
  return images
    .map(
      img => `
        <li class="gallery-item">
            <a href="${img.largeImageURL}">
                <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
            </a>
            <div class="info">
                <p><b>Likes:</b> ${img.likes}</p>
                <p><b>Views:</b> ${img.views}</p>
                <p><b>Comments:</b> ${img.comments}</p>
                <p><b>Downloads:</b> ${img.downloads}</p>
            </div>
        </li>
    `
    )
    .join('');
}

export function renderGallery(images) {
  if (!images || images.length === 0) {
    iziToast.warning({
      title: 'Oops',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }
  gallery.innerHTML = createGalleryMarkup(images);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

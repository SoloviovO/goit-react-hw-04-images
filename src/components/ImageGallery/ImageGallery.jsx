import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.ImageGallery}>
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            key={photo.id}
            webformatURL={photo.webformatURL}
            largeImageURL={photo.largeImageURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array,
};

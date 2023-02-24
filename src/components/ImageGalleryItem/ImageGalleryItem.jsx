import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import { useState } from 'react';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li className={css.ImageGalleryItem} onClick={toggleModal}>
        <img className={css.ImageGalleryItemImage} src={webformatURL} alt="" />
      </li>
      {isOpen && <Modal largeImageURL={largeImageURL} onClose={toggleModal} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};

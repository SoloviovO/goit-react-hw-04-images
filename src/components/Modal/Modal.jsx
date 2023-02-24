import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modalEL = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, onClose, tags }) => {
  useEffect(() => {
    const onCloseByEscape = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onCloseByEscape);

    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
    };
  }, [onClose]);

  return createPortal(
    <div
      className={css.Overlay}
      onClick={e => {
        e.target === e.currentTarget && onClose();
      }}
    >
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalEL
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClose: PropTypes.func,
  tags: PropTypes.string,
};

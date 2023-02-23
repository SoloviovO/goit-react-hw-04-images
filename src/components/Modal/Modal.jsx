import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalEL = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseByEscape);
  }

  onCloseByEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL, onClose, tags } = this.props;
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
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClose: PropTypes.func,
  tags: PropTypes.string,
};

import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
          <img
            className={css.ImageGalleryItemImage}
            src={this.props.webformatURL}
            alt=""
          />
        </li>
        {this.state.isOpen && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};

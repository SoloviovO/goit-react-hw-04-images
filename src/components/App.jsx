import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getHitsService } from 'services/hitsService';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

export class App extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
    total: 0,
    isloading: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isloading: true });
      getHitsService(query, page)
        .then(data => {
          if (!data.totalHits) {
            return alert('Bad query! Try again!');
          }
          this.setState(({ photos }) => ({
            photos: page === 1 ? [...data.hits] : [...photos, ...data.hits],
            total: data.totalHits,
          }));
        })
        .catch(error => alert(`${error.message}`))
        .finally(() => this.setState({ isloading: false }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleFormSubmit = query => {
    this.setState({ query: query, page: 1, photos: [] });
  };

  render() {
    const { photos, isloading, total } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery photos={photos} />
        {isloading ? (
          <Loader />
        ) : (
          photos.length !== 0 &&
          photos.length < total && <Button onLoadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

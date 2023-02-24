import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getHitsService } from 'services/hitsService';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsloading(true);
      getHitsService(query, page)
        .then(data => {
          if (!data.totalHits) {
            return alert('Bad query! Try again!');
          }
          setPhotos(prev =>
            page === 1 ? [...data.hits] : [...prev, ...data.hits]
          );
          setTotal(data.totalHits);
        })
        .catch(error => alert(`${error.message}`))
        .finally(() => setIsloading(false));
    }
  }, [page, query]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery photos={photos} />
      {isloading ? (
        <Loader />
      ) : (
        photos.length !== 0 &&
        photos.length < total && <Button onLoadMore={handleLoadMore} />
      )}
    </div>
  );
};

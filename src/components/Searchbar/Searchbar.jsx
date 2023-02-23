import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const { value } = event.currentTarget.elements.query;
    onSubmit(value);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button className={css.SearchFormButton} type="submit">
          <FaSearch size={20} />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onsubmit: PropTypes.func,
};

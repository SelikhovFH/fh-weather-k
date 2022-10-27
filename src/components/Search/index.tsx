import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import styles from './Search.module.scss';
import search from '../../assets/search.svg';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <PlacesAutocomplete
      value={searchValue}
      onChange={setSearchValue}
      debounce={1500}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <>
          <div className={styles.search}>
            <input
              className={styles.search__input}
              {...getInputProps({
                placeholder: 'City, country or region',
              })}
            />
            <img src={search} alt="Search" />
            {suggestions.length > 0 && (
              <ul className={styles.dropdown}>
                {suggestions.map((suggestion) => (
                  <li
                    className={styles.dropdown__item}
                    {...getSuggestionItemProps(suggestion)}
                    key={suggestion.placeId}
                  >
                    <b>{`${suggestion.formattedSuggestion.mainText} `}</b>
                    <span>{suggestion.formattedSuggestion.secondaryText}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.search__backdrop} />
        </>
      )}
    </PlacesAutocomplete>
  );
};

export default Search;

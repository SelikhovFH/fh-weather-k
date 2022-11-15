import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PlacesAutocomplete from 'react-places-autocomplete';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import styles from './Search.module.scss';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const input = useRef<HTMLInputElement>(null);

  const handleSelect = () => {
    setSearchValue('');
    input?.current?.blur();
  };

  return (
    <PlacesAutocomplete
      value={searchValue}
      onChange={setSearchValue}
      onSelect={handleSelect}
      debounce={500}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <>
          <div className={styles.search}>
            <input
              ref={input}
              className={styles.search__input}
              {...getInputProps({
                placeholder: 'City, country or region',
              })}
            />
            <SearchIcon />
            {suggestions.length > 0 && (
              <ul className={styles.dropdown}>
                {suggestions.map((suggestion) => (
                  <li
                    className={styles.dropdown__item}
                    {...getSuggestionItemProps(suggestion)}
                    key={suggestion.placeId}
                  >
                    <NavLink to={`/details/${suggestion.placeId}`}>
                      <b>{`${suggestion.formattedSuggestion.mainText}, `}</b>
                      <span>
                        {suggestion.formattedSuggestion.secondaryText}
                      </span>
                    </NavLink>
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

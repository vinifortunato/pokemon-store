import { useCallback } from 'react';
import * as Style from './Search.style';

const Search = ({ onChange, placeholder = 'Search...' }) => {
  const onInputChange = useCallback(
    (event) => {
      onChange && onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <Style.Wrapper>
      <Style.Input onChange={onInputChange} placeholder={placeholder} />
    </Style.Wrapper>
  );
};

export default Search;

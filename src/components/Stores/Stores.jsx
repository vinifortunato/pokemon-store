import { useCallback } from 'react';
import Store from './Store';
import * as Style from './Stores.style';

const Stores = ({ items, onItemClick }) => {
  const handleItemClick = useCallback(
    (item) => {
      onItemClick && onItemClick(item);
    },
    [onItemClick],
  );

  const map = items.map(({ name, logo }) => (
    <Store key={name} label={name} image={{ alt: name, src: logo }} onClick={() => handleItemClick(name)} />
  ));

  return (
    <Style.Wrapper>
      <Style.Container>{map}</Style.Container>
    </Style.Wrapper>
  );
};

export default Stores;

import { useCallback } from 'react';
import { ButtonSmall } from '@src/components/buttons';
import { currency, zeroPad } from '@src/utils';
import * as Style from './CatalogItem.style';

const CatalogItem = ({ id, image, label = 'Pokémon', onAddClick, onViewClick, price = 0 }) => {
  const handleAddClick = useCallback(() => {
    onAddClick && onAddClick(id);
  }, []);

  const handleViewClick = useCallback(() => {
    onViewClick && onViewClick(id);
  }, []);

  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Image alt={image ? image.alt : 'Pokémon'} src={image ? image.src : ''} onClick={handleViewClick} />
        <div>
          <Style.Id>{`#${zeroPad(id, 3)}`}</Style.Id>
          <Style.Label>{label}</Style.Label>
        </div>
        <div>
          <Style.Price>{currency({ value: price })}</Style.Price>
          <Style.ButtonAdapter>
            <ButtonSmall label="Comprar" onClick={handleAddClick} />
          </Style.ButtonAdapter>
        </div>
      </Style.Container>
    </Style.Wrapper>
  );
};

export default CatalogItem;

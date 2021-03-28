import { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { ButtonIcon, ButtonLarge, Tag } from '@src/components';
import { IconClose } from '@src/icons';
import { currency, zeroPad } from '@src/utils';
import * as Style from './ModalDetails.style';

const ModalDetails = ({ id, onAdd, onClose, price, show = true }) => {
  const [isReady, setIsReady] = useState(false);
  const [data, setData] = useState(null);

  const loadData = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    setIsReady(true);
    id && loadData(id);
  }, [id]);

  const handleAddClick = useCallback(() => {
    setData(null);
    onAdd && onAdd();
  }, [onAdd]);

  const handleCloseClick = useCallback(() => {
    setData(null);
    onClose && onClose();
  }, [onClose]);

  if (!isReady) {
    return null;
  }

  return ReactDOM.createPortal(
    <Style.Wrapper show={show}>
      <Style.Container>
        {data ? (
          <Style.Content>
            <Style.Resume>
              <Style.ImageWrapper>
                <Style.Image alt={data.name} src={data.sprites.other['official-artwork'].front_default} />
              </Style.ImageWrapper>
              <Style.ResumeDetails>
                <Style.Id>{`#${zeroPad(data.id, 3)}`}</Style.Id>
                <Style.Title>{data.name}</Style.Title>
                <Style.Tags>
                  {data.types.map(({ type }) => (
                    <Tag color={type.name} image={type.name} key={type.name} label={type.name} />
                  ))}
                </Style.Tags>
              </Style.ResumeDetails>
            </Style.Resume>
            <Style.Details>
              <p>{currency({ value: price })}</p>
            </Style.Details>
            <ButtonLarge label="Buy" onClick={handleAddClick} />
            <Style.ButtonCloseAdapter>
              <ButtonIcon Icon={IconClose} onClick={handleCloseClick} />
            </Style.ButtonCloseAdapter>
          </Style.Content>
        ) : (
          <p>Loading...</p>
        )}
      </Style.Container>
    </Style.Wrapper>,
    document.body,
  );
};

export default ModalDetails;

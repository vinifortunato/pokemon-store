import { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { ButtonLarge } from '@src/components';
import * as Style from './ModalCheckout.style';

const ModalCheckout = ({ show = true, onConfirm }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const handleConfirmClick = useCallback(() => {
    onConfirm && onConfirm();
  }, [onConfirm]);

  if (!isReady) {
    return null;
  }

  return ReactDOM.createPortal(
    <Style.Wrapper show={show}>
      <Style.Container>
        <Style.Title>Thanks for your purchase!</Style.Title>
        <Style.Message>Have fun with your new Pokémon!</Style.Message>
        <ButtonLarge label="Continue" onClick={handleConfirmClick} />
      </Style.Container>
    </Style.Wrapper>,
    document.body,
  );
};

export default ModalCheckout;

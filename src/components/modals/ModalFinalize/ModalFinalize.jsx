import { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { ButtonLarge } from '@src/components';
import * as Style from './ModalFinalize.style';

const ModalFinalize = ({ show = true, onConfirm }) => {
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
        <Style.Title>Obrigado por sua compra!</Style.Title>
        <Style.Message>Divirta-se com seus novos Pokémons!</Style.Message>
        <ButtonLarge label="Continuar" onClick={handleConfirmClick} />
      </Style.Container>
    </Style.Wrapper>,
    document.body,
  );
};

export default ModalFinalize;

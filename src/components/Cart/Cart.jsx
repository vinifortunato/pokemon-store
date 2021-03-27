import { useCallback } from 'react';
import { ButtonLarge } from '@src/components/buttons';
import { currency } from '@src/utils';
import CartItem from './CartItem';
import * as Style from './Cart.style';

const Cart = ({ items, onFinalize, onRemoveItem }) => {
  const handleRemoveItem = useCallback(
    (item) => {
      onRemoveItem && onRemoveItem(item.id);
    },
    [onRemoveItem],
  );

  const handleFinalize = useCallback(
    (item) => {
      onFinalize && onFinalize(item);
    },
    [onFinalize],
  );

  let total = 0;
  const itemsMap = items.map((item) => {
    total += item.price;
    return (
      <CartItem
        key={`cart-item-${item.id}`}
        id={item.id}
        image={item.image}
        label={item.name}
        onRemoveClick={() => handleRemoveItem(item)}
        price={item.price}
      />
    );
  });

  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Title>Carrinho</Style.Title>
        {itemsMap.length <= 0 ? (
          <Style.EmptyText>Nenhum Pokémon.</Style.EmptyText>
        ) : (
          <>
            <div>{itemsMap}</div>
            <div>
              <Style.Price>{`Total: ${currency({ value: total })}`}</Style.Price>
              <ButtonLarge label="Finalizar" onClick={handleFinalize} />
            </div>
          </>
        )}
      </Style.Container>
    </Style.Wrapper>
  );
};

export default Cart;

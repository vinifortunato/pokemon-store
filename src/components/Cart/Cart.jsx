import { useCallback } from 'react';
import { ButtonLarge } from '@src/components/buttons';
import { currency } from '@src/utils';
import CartItem from './CartItem';
import * as Style from './Cart.style';

const Cart = ({ items, onCheckout, onRemoveItem }) => {
  const handleRemoveItem = useCallback(
    (item) => {
      onRemoveItem && onRemoveItem(item.id);
    },
    [onRemoveItem],
  );

  const handleCheckout = useCallback(
    (item) => {
      onCheckout && onCheckout(item);
    },
    [onCheckout],
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
        <Style.Title>{`Cart ${itemsMap.length > 0 ? `(${itemsMap.length})` : ''}`}</Style.Title>
        {itemsMap.length <= 0 ? (
          <Style.EmptyText>Empty.</Style.EmptyText>
        ) : (
          <>
            <div>{itemsMap}</div>
            <div>
              <Style.Price>{`Total: ${currency({ value: total })}`}</Style.Price>
              <ButtonLarge label="Checkout" onClick={handleCheckout} />
            </div>
          </>
        )}
      </Style.Container>
    </Style.Wrapper>
  );
};

export default Cart;

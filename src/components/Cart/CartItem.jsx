import { ButtonIcon } from '@src/components/buttons';
import { IconTrash } from '@src/icons';
import { currency } from '@src/utils';
import * as Style from './CartItem.style';

const CartItem = ({ image, label, onRemoveClick, price }) => (
  <Style.Wrapper>
    <Style.Container>
      <Style.Image alt={image ? image.alt : 'Pokémon'} src={image ? image.src : ''} />
      <Style.Details>
        <Style.Label>{label}</Style.Label>
        <Style.Price>{currency({ value: price })}</Style.Price>
      </Style.Details>
    </Style.Container>
    <ButtonIcon Icon={IconTrash} onClick={onRemoveClick} />
  </Style.Wrapper>
);

export default CartItem;

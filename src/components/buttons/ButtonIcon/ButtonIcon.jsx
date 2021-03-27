import * as Style from './ButtonIcon.style';

const ButtonIcon = ({ Icon, width = 32, height = 32, onClick }) => (
  <Style.Button width={width} height={height} onClick={onClick}>
    <Icon />
  </Style.Button>
);

export default ButtonIcon;

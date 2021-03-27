import * as Style from './ButtonLarge.style';

const ButtonLarge = ({ label = 'Button', onClick }) => <Style.Button onClick={onClick}>{label}</Style.Button>;

export default ButtonLarge;

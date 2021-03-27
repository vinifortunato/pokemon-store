import * as Style from './ButtonSmall.style';

const ButtonSmall = ({ label = 'Button', onClick }) => <Style.Button onClick={onClick}>{label}</Style.Button>;

export default ButtonSmall;

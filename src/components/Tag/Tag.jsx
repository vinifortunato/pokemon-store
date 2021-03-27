import * as Style from './Tag.style';

const Tag = ({ color = 'default', image = 'default', label = 'No tag' }) => (
  <Style.Wrapper backgroundColor={color}>
    <Style.Image alt={label} src={`/assets/images/types/${image}.svg`} />
    <Style.Label>{label}</Style.Label>
  </Style.Wrapper>
);

export default Tag;

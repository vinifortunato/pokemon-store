import * as Style from './Store.style';

const Store = ({ label, image, onClick }) => (
  <Style.Wrapper onClick={onClick}>
    <Style.Container color={label}>
      <Style.ImageWrapper>
        <Style.Image alt={image.alt} src={image.src} />
      </Style.ImageWrapper>
      <Style.Details>
        <Style.Title>{label}</Style.Title>
        <Style.Subtitle>store</Style.Subtitle>
      </Style.Details>
    </Style.Container>
  </Style.Wrapper>
);

export default Store;

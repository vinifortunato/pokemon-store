import CatalogItem from './CatalogItem';
import * as Style from './Catalog.style';

const Catalog = ({ onAddProduct, onViewProduct, products }) => {
  const productsMap = products.map((product) => (
    <CatalogItem
      key={product.id}
      id={product.id}
      image={product.image}
      label={product.name}
      onAddClick={onAddProduct}
      onViewClick={onViewProduct}
      price={product.price}
    />
  ));

  return (
    <Style.Wrapper>
      <Style.Container>{productsMap}</Style.Container>
    </Style.Wrapper>
  );
};

export default Catalog;

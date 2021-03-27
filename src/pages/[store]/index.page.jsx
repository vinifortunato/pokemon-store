import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Cart, Catalog, Head, Search } from '@src/components';
import { capitalize } from '@src/utils';
import { PageStyle } from '@src/styles';

const Store = ({ initialData }) => {
  const router = useRouter();

  const [products, setProducts] = useState(initialData);
  const [cartProducts, setCartProducts] = useState([]);

  const onSearchChange = useCallback(
    (value) => {
      if (value.length <= 0) {
        setProducts(initialData);
        return;
      }
      const filtered = initialData.filter((element) => element.name.toLowerCase().includes(value.toLowerCase()));
      setProducts(filtered);
    },
    [initialData],
  );

  const addProduct = useCallback(
    (id) => {
      const product = products.find((product) => product.id === id);
      console.log('addProduct', product);
      setCartProducts((old) => (old.indexOf(product) != -1 ? old : [...old, product]));
    },
    [cartProducts, products],
  );

  const removeProduct = useCallback(
    (id) => {
      console.log('removeProduct', id);
      const filtered = cartProducts.filter((item) => item.id != id);
      setCartProducts(filtered);
    },
    [cartProducts],
  );

  const viewProduct = useCallback(
    (id) => {
      const product = products.find((product) => product.id === id);
      console.log('viewProduct', product);
      router.push(`${router.asPath}/${product.id}`);
    },
    [router, products],
  );

  const finalize = useCallback(() => {
    console.log('onFinalize', cartProducts);
  }, [cartProducts]);

  return (
    <PageStyle.Page>
      <Head title={`${capitalize(router.query.store)} Store`} />
      <PageStyle.Container>
        <Search onChange={onSearchChange} />
        <PageStyle.Content>
          <Catalog onAddProduct={addProduct} onViewProduct={viewProduct} products={products} />
          <Cart items={cartProducts} onFinalize={finalize} onRemoveItem={removeProduct} />
        </PageStyle.Content>
      </PageStyle.Container>
    </PageStyle.Page>
  );
};

export const getStaticPaths = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon-color/';
  const response = await fetch(url);
  const data = await response.json();
  const routes = data.results.map((element) => ({ path: `/${element.name}` }));
  const paths = routes.map(({ path }) => path);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { store } = params;
  const color = store;
  const url = `https://pokeapi.co/api/v2/pokemon-color/${color}`;
  const response = await fetch(url);
  const data = await response.json();
  const species = data.pokemon_species;

  const initialData = species.map((element) => {
    const regex = new RegExp(/pokemon-species\/(.*)\//);
    const id = regex.exec(element.url)[1];
    return {
      id,
      image: {
        alt: element.name,
        src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      },
      name: element.name,
      price: id * 1,
    };
  });

  return {
    props: {
      initialData,
      theme: color,
    },
  };
};

export default Store;

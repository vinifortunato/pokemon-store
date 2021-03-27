import Link from 'next/link';
import { Head } from '@src/components';
import { PageStyle } from '@src/styles';

const Home = ({ initialData }) => {
  return (
    <div>
      <Head title="Pokémon Stores" />
      <PageStyle.Container>
        <p>Please, select a store:</p>
        <ul>
          {initialData.map((color) => (
            <li key={color}>
              <Link href={`/${color}`}>
                <a>{color}</a>
              </Link>
            </li>
          ))}
        </ul>
      </PageStyle.Container>
    </div>
  );
};

export const getStaticProps = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon-color/';
  const response = await fetch(url);
  const data = await response.json();
  const colors = data.results.map((element) => element.name);

  return {
    props: {
      initialData: colors,
      theme: 'default',
    },
  };
};

export default Home;

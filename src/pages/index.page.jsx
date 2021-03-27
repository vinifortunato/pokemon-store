import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Head, Stores } from '@src/components';
import { PageStyle } from '@src/styles';

const Home = ({ initialData }) => {
  const router = useRouter();

  const handleItemClick = useCallback(
    (item) => {
      router.push(`/${item}`);
    },
    [router],
  );

  return (
    <PageStyle.Page>
      <Head title="Pokémon Stores" />
      <PageStyle.Container>
        <Stores items={initialData} onItemClick={handleItemClick} />
      </PageStyle.Container>
    </PageStyle.Page>
  );
};

export const getStaticProps = () => {
  // Colors by https://pokeapi.co/api/v2/pokemon-color/
  const colors = [
    {
      name: 'black',
      logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg',
    },
    {
      name: 'blue',
      logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
    },
    {
      name: 'brown',
      logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg',
    },
    {
      name: 'gray',
      logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/66.svg',
    },
    {
      name: 'green',
      logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    },
    {
      name: 'pink',
      logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg',
    },
    {
      name: 'purple',
      logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg',
    },
    {
      name: 'red',
      logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
    },
    {
      name: 'white',
      logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg',
    },
    {
      name: 'yellow',
      logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg',
    },
  ];

  return {
    props: {
      initialData: colors,
      theme: 'default',
    },
  };
};

export default Home;

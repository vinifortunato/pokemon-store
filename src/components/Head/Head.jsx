import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({ title }) => (
  <NextHead>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="Description" content="The best Pokémon are here!"></meta>
    <title>{title}</title>
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;

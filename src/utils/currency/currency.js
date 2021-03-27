const formats = {
  BRL: {
    decimalDelimiter: ',',
    decimals: 2,
    preCurrency: 'R$ ',
    postCurrency: '',
    sections: 3,
    sectionsDelimiter: '.',
  },
};

const format = ({ decimalDelimiter, decimals, preCurrency, postCurrency, sections, sectionsDelimiter, value }) => {
  const regex = `\\d(?=(\\d{${sections}})+${decimals > 0 ? '\\D' : '$'})`;
  const fixed = Number(value).toFixed(Math.max(0, decimals));
  const delimited = fixed.replace('.', decimalDelimiter).replace(new RegExp(regex, 'g'), `$&${sectionsDelimiter}`);
  return `${preCurrency}${delimited}${postCurrency}`;
};

const currency = ({ currency = 'BRL', value }) => format({ value, ...formats[currency] });

export default currency;

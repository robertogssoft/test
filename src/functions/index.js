import 'intl';
import 'intl/locale-data/jsonp/es';

const formatter = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
});

export {formatter};

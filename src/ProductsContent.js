import React from 'react';
import productsData from './data/productsData';
import Product from './components/Product';

function ProductsContent() {
  const styles = {
    redColor: { color: 'red' },
    blueColor: { color: 'blue' },
    greenColor: { color: 'green' },
    orangeColor: { color: 'orange' },
    purpleColor: { color: 'purple' },
    aquaColor: { color: '#12BDBD' }
  };

  const productComponents = productsData.map(product => (
    <Product key={product.id} data={{ product }} />
  ));

  return (
    <main>
      <h3 style={styles.redColor}>Products Component</h3>
      {productComponents}
    </main>
  );
}

export default ProductsContent;

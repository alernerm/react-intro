import React from 'react';

function Product(props) {
  const { name, description, price, id } = props.data.product;
  //console.log(props);
  return (
    <div key={id}>
      <table border="1" width="35%" cellPadding="20" cellSpacing="2">
        <tbody className="products">
          <tr>
            <td>
              <b>{name}</b>
              <div>{description}</div>
              <br />
              <div>
                Price:&nbsp;
                {price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Product;

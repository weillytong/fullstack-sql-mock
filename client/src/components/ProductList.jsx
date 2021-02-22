import React from 'react';
import Products from './Products';

const ProductList = (props) => {
   return(
    <div className='product-list'>
      {/* {console.log('props', props)} */}
      {props.productList.map((product, key) => {
        return (
          <Products product={product} key={key} handleSelectedClick={props.handleSelectedClick}/>
        )
      })}
    </div>
  )
}

export default ProductList
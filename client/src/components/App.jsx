import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      productViewer: {}
    }
    this.getProducts = this.getProducts.bind(this);
    this.handleSelectedClick = this.handleSelectedClick.bind(this);
  }

  getProducts() {
    axios.get('/api/products')
      .then((results) => {
        this.setState({
          products: results.data,
          productViewer: results.data[0]
        }/*, ()=> {
          console.log('this.state', this.state)
        }*/)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getProducts();
  }

  // handleSelectedClick(product, e)
    // upon clicking, change the state of productViewer to the object product that was clicked
    // pass this function down to Products.jsx
  handleSelectedClick(product, e) {
    this.setState({
      productViewer: product
    }/*, () => {
      console.log('this.state.productViewer', this.state.productViewer)
    }*/)
  }

  render(){
    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer productViewer={this.state.productViewer} getProducts={this.getProducts} />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList productList={this.state.products} handleSelectedClick={this.handleSelectedClick}/>
          </div>
        </div>
      </div>
    )
  }
}
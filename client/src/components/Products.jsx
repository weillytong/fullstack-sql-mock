import React from 'react';


export default class Products extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div onClick={(e) => this.props.handleSelectedClick(this.props.product, e)}>
        {/* {console.log('this.props', this.props)} */}
        {this.props.product.item}
        {this.props.product.min_cost}
        {this.props.product.curr_bid}
        {this.props.product.ends_in}
        <img src={this.props.product.image}/>
      </div>
    )
  }
}

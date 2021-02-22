import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {},
      isUpdating: false
      // id: 0,
      // item: '',
      // min_cost: 0,
      // curr_bid: 0,
      // ends_in: 0,
      // image: ''
    }
    // this.getProductViewer = this.getProductViewer.bind(this);
    this.handleUpdating = this.handleUpdating.bind(this);
  }

  // getProductViewer() {
  //   this.setState({
  //     selected: this.props.productViewer
  //     // item: this.props.productViewer.item
  //   }, () => {
  //     console.log('this.state.selected', this.state.selected)
  //   })
  // }

  // componentDidMount() {
  //   this.getProductViewer();
  // }

  handleUpdating() {
    this.setState({
      isUpdating: !this.state.isUpdating
    }, () => {
      console.log(this.state.isUpdating)
    })
  }

  render(){
    return(
      <div className = 'product-viewer-details' onClick={this.handleUpdating}>
        {/* {console.log('this.props.productViewer', this.props.productViewer)} */}
        <div>
          {this.props.productViewer.item}
        </div>
        <div> Current Bid:
          ${this.props.productViewer.curr_bid}
          <form>
            <label> New Bid:
              <input></input>
            </label>
          </form>
        </div>
        <div> Original Posting Price:
          ${this.props.productViewer.min_cost}
        </div>
        <div> Bidding Ends in:
          {this.props.productViewer.ends_in}day(s)
        </div>
        <img src={this.props.productViewer.image}></img>
      </div>
    )
  }
}










// render(){
//   if (this.state.isUpdating) {
//     return(
//       <div className = 'product-viewer-details' onClick={this.handleUpdating}>
//         {/* {console.log('this.props.productViewer', this.props.productViewer)} */}
//         <div>
//           {this.props.productViewer.item}
//         </div>
//         <div> Current Bid:
//           ${this.props.productViewer.curr_bid}
//           <form>
//             <label> New Bid:
//               <input></input>
//             </label>
//           </form>
//         </div>
//         <div> Original Posting Price:
//           ${this.props.productViewer.min_cost}
//         </div>
//         <div> Bidding Ends in:
//           {this.props.productViewer.ends_in}day(s)
//         </div>
//         <img src={this.props.productViewer.image}></img>
//       </div>
//     )
//   } else {
//     return(
//       <div className = 'product-viewer-details' onClick={this.handleUpdating}>
//         {/* {console.log('this.props.productViewer', this.props.productViewer)} */}
//         <div>
//           {this.props.productViewer.item}
//         </div>
//         <div> Current Bid:
//           ${this.props.productViewer.curr_bid}
//         </div>
//         <div> Original Posting Price:
//           ${this.props.productViewer.min_cost}
//         </div>
//         <div> Bidding Ends in:
//           {this.props.productViewer.ends_in}day(s)
//         </div>
//         <img src={this.props.productViewer.image}></img>
//       </div>
//     )
//   }
// }
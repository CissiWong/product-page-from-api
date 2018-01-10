import React from "react"


class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <div className="box-hover">
          <p className="description"><h2>{this.props.name}</h2>
              {this.props.description}</p>
          <div className="headline">
                  <h2>{this.props.name}</h2>
            </div>
          <div className="img-container">
                <img src={this.props.image} alt="" />
         </div>
      <div className="list">
        <ul>
          <li>{this.props.substance}</li>
          <li>{this.props.size}</li>
          <li>{this.props.type}</li>
          <li>{this.props.numberInPack}</li>
        </ul>
      </div>
    </div>
      <div className="delivery">
        <h2>{this.props.price}:-</h2>
        <button>Köp</button>
        <p>Delivery time: {this.props.deliveryTime}</p>
      </div>
    </div>
    )
  }
}

export default Product

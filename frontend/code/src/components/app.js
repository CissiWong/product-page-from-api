import React from "react"
import Product from "./product"
// const productsJson = require("./../products.json")


// console.log("Products:", productsJson)


class App extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          products: []
        }
      }

      componentDidMount() {
        fetch("http://localhost:8080/all-products").then(response => (
          response.json()
        )).then(json => (
          this.setState({
             products: json
          })
        ))}

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Apoteket</h1>
            <p>kontakt</p>
            <p>om oss</p>
            <p>tips</p>
        </div>
        <div className="product-container">
           {this.state.products.map((item) => {
            return <Product
               key={item.id}
               name={item.name}
               price={item.price}
               type={item.type}
               size={item.size}
               numberInPack={item.numberInPack}
               deliveryTime={item.deliveryTime}
               image={item.image}
               substance={item.substance}
               description={item.description}
             />
         })}
       </div>
     </div>
    )
  }
}


export default App

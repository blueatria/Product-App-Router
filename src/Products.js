import {Link} from "react-router-dom"
import ProductForm from "./ProductForm"

const Products = ({products, user, addProduct}) => {
    const contentStyle = {
        backgroundColor: 'white',
        color: '#800000',
        padding: 10,
        margin: 20,
        fontSize: 16
    }

    const listStyle = {
        listStyleType: 'none'   
    };

    return(
      <div style={contentStyle}>
        <h3> Display Existing Products </h3>
        <ul style={listStyle}>
            {products.map(product => 
               <li key={product.id}>
                 <Link to={`/products/${product.id}`}>{product.name}</Link> 
               </li>
            )}
        </ul>
        {user !== null
          ?<ProductForm addProduct={addProduct}/>
          :null
        }
      </div> 
    )
}

export default Products
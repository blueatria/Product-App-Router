import {useParams} from "react-router-dom"
import Button from './Button'

const Product = ({products, addLike}) => {
  const id = Number(useParams().id)
  const product = products.find(p => p.id === id) 

  const contentStyle = {
    backgroundColor: 'white',
    color: '#800000',
    padding: 10,
    margin: 20,
    fontSize: 16
  }

  if (product) {
    return(
      <div style={contentStyle}>
        {product.code} -- {product.name} -- {product.category} -- {product.likes} 
        &nbsp;&nbsp;
        <Button eventHandler={() => addLike(product)} text='Like' />
      </div>
    )
  } else {
    return 'Not Found'
  }
    
}

export default Product
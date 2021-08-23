//import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import Products from './Products';
import Product from './Product';
import Home from './Home'
import Users from './Users'
import Login from './Login'
import Button from './Button'
import productServices from './services/products';
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom"

const footerStyle = {
  backgroundColor: 'white',
  color: 'black',
  padding: 20,
  margin: 20,
  fontSize: 12
}

const padding = {
  padding: 20,
  margin: 20,
  color: 'black',
  fontSize: 20
}


const App = () => {
  const[products, setProducts] = useState([])
  const [user, setUser] = useState(null)

  //load all exsiting products
  useEffect(()=> {
    console.log('effect')
    productServices.getAll()
    .then(object => {
      console.log('promise fulfilled')
      setProducts(object)
    })
  }, [])

  console.log('render', products.length, 'pieces of products')

  //update the number of likes for products
  const addLike = (product) => {
    const newProduct = {...product, likes: product.likes+1}
    console.log('update likes in item', newProduct)
    productServices.update(newProduct)
        .then(data => {
          console.log("got response", data)
          const newProducts = products.map(
            product => product.id === data.id ? data : product
          )
          setProducts(newProducts)
        })
        .catch(
          (error) => {
            alert('we got an error')
          }
        )
        .finally(
          console.log('We have done')
        )
  }

  //add new products
  const addProduct = (productObject) => {
    productServices.create(productObject)
    .then(object => {
      console.log('the returned response for the post request', object)
      setProducts(products.concat(object)) 
    })
  }

  //handle login request
  const setLogin = (userInfo) => {
    setUser(userInfo)
  }

  //handle logout
  const setLogout = () => {
    setUser(null)
  }

  return(
    <div className="App">
      <Router>
        <div>
            <Link style={padding} to="/">home</Link>
            <Link style={padding} to="/products">products</Link>
            <Link style={padding} to="/users">users</Link>
            {user !== null
              ? <span><em> Logged in as <strong> {user} </strong></em> <Button eventHandler={setLogout} text="logout"/></span>
              : <Link style={padding} to="/login">login</Link>
            }
        </div>
        <Switch>
            <Route path="/products/:id">
              <Product products={products} addLike={addLike} />
            </Route>
            <Route path="/products">
              <Products products={products} user={user} addProduct={addProduct} />
            </Route>
            <Route path="/login">
              <Login user={user} setLogin={setLogin}/>
            </Route>
            <Route path="/users">
              {user ? <Users /> : <Redirect to="/login" />}
            </Route>
            <Route path="/">
              <Home user={user} />
            </Route>
        </Switch>
      </Router>
      <footer style={footerStyle}>
        <i> Product App, Department of Computing </i>
        <br/><i> {Date()}</i>
      </footer>
    </div>
  )
}

export default App;

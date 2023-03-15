import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
// import Home from './pages/Home';
import ScrollToTop from './helpers/ScrollToTop';
import { useSelector } from 'react-redux';
import Settings from './pages/Account/Settings';
import Success from './pages/Success';
import Account from './pages/Account/Account';
import History from './pages/Account/History';

function App() {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products/:cat">
                    <ProductList />
                </Route>
                <Route path="/products">
                    <ProductList />
                </Route>
                <Route path="/product/:id">
                    <Product />
                </Route>
                <Route path="/cart">{!user ? <Redirect to="/login" /> : <Cart />}</Route>
                <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
                <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>
                <Route path="/settings">{user ? <Settings /> : <Redirect to="/login" />}</Route>
                <Route path="/account">{user ? <Account /> : <Redirect to="/login" />}</Route>
                <Route path="/history">{user ? <History /> : <Redirect to="/login" />}</Route>
                <Route path="/success">{user ? <Success /> : <Redirect to="/login" />}</Route>
            </Switch>
        </Router>
    );
}

export default App;

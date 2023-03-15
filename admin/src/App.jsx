import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import NewUser from './pages/NewUser';
import Product from './pages/Product';
import ProductsList from './pages/ProductList';
import User from './pages/User';
import UserList from './pages/UserList';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

const Container = styled.div`
    display: flex;
`;

function App() {
    const admin = useSelector((state) => state.user.currentUser);

    return (
        <Router>
            <Switch>
                <Route path="/login">{admin ? <Redirect to="/" /> : <Login />}</Route>
                {admin && (
                    <>
                        <Topbar />
                        <Container>
                            <Sidebar />
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/users" exact>
                                <UserList />
                            </Route>
                            <Route path="/user/:userId">
                                <User />
                            </Route>
                            <Route path="/newUser" exact>
                                <NewUser />
                            </Route>
                            <Route path="/products" exact>
                                <ProductsList />
                            </Route>
                            <Route path="/product/:productId">
                                <Product />
                            </Route>
                            <Route path="/newproduct">
                                <NewProduct />
                            </Route>
                        </Container>
                    </>
                )}
            </Switch>
        </Router>
    );
}

export default App;

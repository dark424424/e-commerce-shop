import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import config from '../../config';
import { removeAllProduct } from '../redux/cartRedux';

const Success = () => {
    const location = useLocation();
    const history = useHistory();
    //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
    const cart = useSelector((state) => state.cart);
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);
    const token = {
        headers: { token: 'Bearer ' + currentUser.accessToken },
    };
    const dispatch = useDispatch();

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await axios.post(
                    `${config.apiURL}/api/orders`,
                    {
                        userId: currentUser._id,
                        products: cart.products.map((item) => ({
                            productId: item._id,
                            quantity: item._quantity,
                        })),
                        amount: cart.total,
                        address: { city: 'Ha Noi' },
                    },
                    token,
                );
                setOrderId(res.data._id);
            } catch (e) {
                console.log(e);
            }
        };
        createOrder();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(removeAllProduct());
        history.push('/');
    };

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {orderId
                ? `Order has been created successfully. Your order number is ${orderId}`
                : `Successfull. Your order is being prepared...`}
            <Link to="/" onClick={(e) => handleClick(e)}>
                <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
            </Link>
        </div>
    );
};

export default Success;

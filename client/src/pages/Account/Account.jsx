import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Dashboard from '../../components/Dashboard';
import Footer from '../../components/Footer';
import config from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Orders from '../../components/Orders';
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 20vh;
`;

const OrderContainer = styled.div`
    flex: 4;
    margin-top: 10px;
    padding: 20px;
`;

export default function Account() {
    const [orders, setOrders] = useState([]);
    const user = useSelector((state) => state.user.currentUser);
    const id = location.pathname.split('/')[1];

    const token = {
        headers: { token: 'Bearer ' + user.accessToken },
    };

    useEffect(() => {
        const getOrder = async () => {
            try {
                const res = await axios.get(`${config.apiURL}/api/orders/find/${user._id}`, token);

                setOrders(res.data);
            } catch (e) {}
        };
        getOrder();
    }, [id]);

    return (
        <div>
            <Navbar />
            <Wrapper>
                <Dashboard />
                <OrderContainer>
                    <Orders orders={orders} condition="pending" isDone={false} />
                </OrderContainer>
            </Wrapper>
            <Footer />
        </div>
    );
}

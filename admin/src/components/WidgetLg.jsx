import styled from 'styled-components';
import { format } from 'timeago.js';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';

const Container = styled.div`
    flex: 2;
    padding: 20px;
    box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
`;

const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
`;

const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`;
const Tr = styled.tr``;
const Th = styled.th`
    text-align: left;
`;
const TdUser = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`;
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;
const Name = styled.span``;
const TdDate = styled.td`
    font-weight: 300;
`;
const TdAmount = styled.td`
    font-weight: 300;
`;
const TdStatus = styled.td``;

const handleButton = (type) => {
    switch (type) {
        case 'done':
            return 'background-color: #e5faf2; color: #3bb077;';
        case '':
            return 'background-color: #fff0f1; color: #d95087;';
        case 'pending':
            return 'background-color: #ebf1fe; color: #2a7ade;';
        default:
            return 'background-color: #fff';
    }
};

const Button = styled.button`
    padding: 5px;
    border: none;
    border-radius: 10px;

    ${({ type }) => handleButton(type)};
`;

export default function WidgetLg() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get('orders');
                setOrders(res.data);
            } catch (e) {}
        };
        getOrders();
    }, []);

    return (
        <Container>
            <Title>Lastest transaction</Title>
            <Table>
                <Tr>
                    <Th>Customer</Th>
                    <Th>Date</Th>
                    <Th>Amount</Th>
                    <Th>Status</Th>
                </Tr>
                {orders.map((order) => (
                    <Tr key={order._id}>
                        <TdUser>
                            <Name>{order.userId}</Name>
                        </TdUser>
                        <TdDate>{format(order.createdAt)}</TdDate>
                        <TdAmount>{order.amount}</TdAmount>
                        <TdStatus>
                            <Button type={order.status}>{order.status}</Button>
                        </TdStatus>
                    </Tr>
                ))}
            </Table>
        </Container>
    );
}

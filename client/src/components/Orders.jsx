import React from 'react';
import styled from 'styled-components';
import Order from './Order';
const Container = styled.div`
    display: flex;
    flex-direction: column;

    min-height: 10vh;
`;
const Title = styled.h1`
    font-size: 20px;
`;

export default function Orders({ orders, condition, isDone }) {
    const filterOrder = orders.filter((order) => order.status === condition);
    console.log(orders);
    return (
        <Container>
            {filterOrder.length > 0 ? (
                filterOrder?.map((item, index) => <Order item={item} key={index} isDone={isDone} />)
            ) : (
                <Title>0 Orders</Title>
            )}
        </Container>
    );
}

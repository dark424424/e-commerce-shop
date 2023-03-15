import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: rgb(251, 251, 255);
    border-radius: 10px;
    display: flex;
    margin: 10px;
    padding: 10px;
    flex-direction: column;
    border: solid 1px #ccc;
    justify-content: center;
    align-items: flex-start;
`;

const Top = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
`;
const Center = styled.div`
    margin-bottom: 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const BottomLeft = styled.div``;
const BottomRight = styled.div``;

export default function Order({ item, isDone }) {
    const message = isDone ? `were delivered` : 'is delivering';
    return (
        <Container>
            <Top>Order ID : {item._id}</Top>
            <Center>
                {' '}
                Your Items {message} to {item.address.city}{' '}
            </Center>
            <Bottom>
                <BottomLeft>Price: $ {item.amount}</BottomLeft>
                <BottomRight>Status: {item.status}</BottomRight>
            </Bottom>
        </Container>
    );
}

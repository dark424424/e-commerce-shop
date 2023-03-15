import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import config from '../../../config';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { updateFailure, updateStart, updateSuccess } from '../../redux/userRedux';
import { update } from '../../redux/apiCalls';
import Dashboard from '../../components/Dashboard';

const Container = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: row;

    justify-content: center;

    /* background-color: #c8202059; */
`;

const Form = styled.form`
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 20px;
    flex: 4;
`;
const Title = styled.h1`
    margin: 10px;
    font-size: 24px;
    font-weight: 300;
`;
const Subtitle = styled.h1`
    margin: 10px;
    font-size: 18px;
    font-weight: 300;
`;

const Input = styled.input`
    margin: 10px;
    padding: 5px;
    width: 300px;
    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    margin: 10px;
    padding: 5px 10px;
    background-color: white;
    color: teal;
    display: flex;
    outline: none;
    border: 2px solid teal;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        background-color: teal;
        color: white;
    }
`;

export default function Settings() {
    const user = useSelector((state) => state.user.currentUser);
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const token = {
        headers: { token: 'Bearer ' + user.accessToken },
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        dispatch(updateStart());
        try {
            const res = await axios.put(
                `${config.apiURL}/api/users/${user._id}`,
                { username: user.username, password },
                token,
            );
            dispatch(updateSuccess());
        } catch (e) {
            dispatch(updateFailure());
        }
    };

    // const handleUpdate = async (e) => {
    //     e.preventDefault();
    //     update(dispatch, { username: user.username, password }, user._id);
    // };

    return (
        <div>
            <Navbar />
            <Container>
                <Dashboard />
                <Form>
                    <Title>Hi {user.username}</Title>
                    <Subtitle>You can update your password here</Subtitle>
                    <Input placeholder="your new password..." onChange={(e) => setPassword(e.target.value)} />
                    <Input placeholder="confirm your password..." />
                    <Button onClick={(e) => handleUpdate(e)}>Update</Button>
                </Form>
            </Container>
            <Footer />
        </div>
    );
}

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';

const Container = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
`;
const Input = styled.input`
    padding: 10px;
    margin-bottom: 20px;
`;
const Button = styled.button`
    padding: 10px;
    width: 100px;
`;
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <Container>
            <Input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={(e) => handleClick(e)}>Login</Button>
        </Container>
    );
}

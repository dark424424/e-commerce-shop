import { Visibility } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { userRequest } from '../requestMethods';

const Container = styled.div`
    flex: 1;
    box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    padding: 20px;
    margin-right: 20px;
`;

const Title = styled.h3`
    font-size: 22px;
    font-weight: bold;
`;
const List = styled.ul``;
const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`;
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;
const User = styled.div`
    display: flex;
    flex-direction: column;
`;
const UserName = styled.span`
    font-weight: 600;
`;
const Job = styled.span`
    font-weight: 300;
`;
const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
`;

export default function WidgetSm() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await userRequest.get('users/?new=true');
                setUsers(res.data);
            } catch (e) {}
        };
        getUser();
    }, []);

    return (
        <Container>
            <Title>New Join Members</Title>
            <List>
                {users.map((user) => (
                    <Item key={user._id}>
                        <Image
                            src={
                                user.img ||
                                'https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg'
                            }
                        />
                        <User>
                            <UserName>{user.username}</UserName>
                        </User>
                        <Button>
                            <Visibility style={{ fontSize: '16px', marginRight: '5px' }} />
                            Display
                        </Button>
                    </Item>
                ))}
            </List>
        </Container>
    );
}

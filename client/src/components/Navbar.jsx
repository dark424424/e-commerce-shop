import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { logout } from '../redux/apiCalls';

const Container = styled.div`
    height: 60px;
    ${mobile({
        height: '50px',
    })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile({
        padding: '10px 0px',
    })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

// const Language = styled.span`
//     font-size: 14px;
//     cursor: pointer;
//     ${mobile({
//         display: 'none',
//     })}
// `;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    /* padding: 5px; */
    ${mobile({
        marginLeft: '12px',
    })}
`;

const Input = styled.input`
    flex: 1;
    padding: 5px;
    border: none;
    ${mobile({
        width: '30px',
    })};

    &:focus {
        outline: none;
    }
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    list-style: none;
    text-decoration: none;
    font-size: 24px;
    font-family: 'Kaushan Script', cursive;
    ${mobile({
        fontSize: '20px',
    })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    ${mobile({
        flex: 2,
        justifyContent: 'center',
    })}
`;

const MenuList = styled.ul`
    position: absolute;
    top: 30px;
    right: 25px;
    z-index: 3;
    background-color: white;
    padding: 10px;
    display: none;
    flex-direction: column;
`;

const MenuListItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    ${mobile({
        fontSize: '12px',
        marginLeft: '10px',
    })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
        fontSize: '12px',
        marginLeft: '10px',
    })}
`;

const MenuProfile = styled.div`
    font-size: 14px;
    margin-left: 25px;

    ${mobile({
        fontSize: '12px',
        marginLeft: '10px',
    })}

    span {
        font-size: 18px;
        font-family: 'Lora', serif;
        cursor: pointer;
        text-decoration: underline;
    }
`;

export default function Navbar() {
    const quantity = useSelector((state) => state.cart.quantity);
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const listRef = useRef(null);

    const user = useSelector((state) => state.user.currentUser);

    const handleLogout = () => {
        logout(dispatch);
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Logo>LongStudy</Logo>
                    </Link>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input placeholder="Search" onChange={(e) => setInput(e.target.value)} />
                        <Link to={`/products/${input.toLowerCase()}`}>
                            <Search style={{ color: 'gray', fontSize: 16, margin: '5px', cursor: 'pointer' }} />
                        </Link>
                    </SearchContainer>
                </Center>
                <Right>
                    {user ? (
                        <>
                            <MenuProfile onClick={() => listRef.current.classList.toggle('active')}>
                                Hi <span>{user.username}</span>
                            </MenuProfile>
                            <MenuList ref={listRef}>
                                <MenuListItem onClick={handleLogout}>LOGOUT</MenuListItem>
                                <Link to="/settings" className="link">
                                    <MenuListItem>SETTINGS</MenuListItem>
                                </Link>
                                <Link to="/account" className="link">
                                    <MenuListItem>ACCOUNT</MenuListItem>
                                </Link>
                            </MenuList>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="link">
                                <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link to="/login" className="link">
                                <MenuItem>LOGIN</MenuItem>
                            </Link>
                        </>
                    )}

                    <Link to="/cart">
                        <MenuItem>
                            <Badge overlap="rectangular" badgeContent={quantity} color="secondary">
                                <ShoppingCartOutlined color="action" />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
}

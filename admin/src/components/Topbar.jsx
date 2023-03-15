import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
`;
const Wrapper = styled.div`
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div``;
const Logo = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
    font-family: 'Kaushan Script', cursive;
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Icon = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`;
const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    background-color: red;
    top: -5px;
    right: 0px;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
`;

export default function Topbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>LongStudy</Logo>
                </Left>
                <Right>
                    <Icon>
                        <NotificationsNone />
                        <IconBadge>2</IconBadge>
                    </Icon>
                    <Icon>
                        <Language />
                    </Icon>
                    <Icon>
                        <Settings />
                    </Icon>
                    <Avatar src="https://img.freepik.com/premium-photo/chinese-new-year-decorationcloseup-dancing-dragon-knots_88135-40978.jpg"></Avatar>
                </Right>
            </Wrapper>
        </Container>
    );
}

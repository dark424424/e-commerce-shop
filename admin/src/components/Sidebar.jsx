import {
    AttachMoney,
    BarChart,
    ChatBubbleOutline,
    DynamicFeed,
    LineStyle,
    MailOutline,
    PermIdentity,
    Report,
    Storefront,
    Timeline,
    TrendingUp,
    WorkOffOutlined,
    WorkOutline,
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgba(251, 251, 255);
    position: sticky;
    top: 50px;
`;

const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`;
const Menu = styled.div`
    margin-bottom: 14px;
`;
const Title = styled.h3`
    font-size: 14px;
    color: #bbb6b6;
`;
const List = styled.ul``;
const Item = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;

    &:active,
    &:hover {
        background-color: rgb(228, 228, 244);
    }
`;

const Icon = styled.div`
    font-size: 10px !important;
    margin-right: 5px;
`;

export default function Sidebar() {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <List>
                        <Link to="/" className="link">
                            <Item>
                                <LineStyle style={{ marginRight: '5px', fontSize: '20px' }} />
                                Home
                            </Item>
                        </Link>
                        <Item>
                            <Timeline style={{ marginRight: '5px', fontSize: '20px' }} />
                            Analytics
                        </Item>
                        <Item>
                            <TrendingUp style={{ marginRight: '5px', fontSize: '20px' }} />
                            Sales
                        </Item>
                    </List>
                </Menu>
                <Menu>
                    <Title>Quick Menu</Title>
                    <List>
                        <Link to="/users" className="link">
                            <Item>
                                <PermIdentity style={{ marginRight: '5px', fontSize: '20px' }} />
                                Users
                            </Item>
                        </Link>
                        <Link to="/products" className="link">
                            <Item>
                                <Storefront style={{ marginRight: '5px', fontSize: '20px' }} />
                                Products
                            </Item>
                        </Link>
                        <Item>
                            <AttachMoney style={{ marginRight: '5px', fontSize: '20px' }} />
                            Transactions
                        </Item>
                        <Item>
                            <BarChart style={{ marginRight: '5px', fontSize: '20px' }} />
                            Reports
                        </Item>
                    </List>
                </Menu>
                <Menu>
                    <Title>Notifications</Title>
                    <List>
                        <Item>
                            <MailOutline style={{ marginRight: '5px', fontSize: '20px' }} />
                            Mail
                        </Item>
                        <Item>
                            <DynamicFeed style={{ marginRight: '5px', fontSize: '20px' }} />
                            Feedback
                        </Item>
                        <Item>
                            <ChatBubbleOutline style={{ marginRight: '5px', fontSize: '20px' }} />
                            Messages
                        </Item>
                    </List>
                </Menu>
                <Menu>
                    <Title>Staff</Title>
                    <List>
                        <Item>
                            <WorkOutline style={{ marginRight: '5px', fontSize: '20px' }} />
                            Manage
                        </Item>
                        <Item>
                            <Timeline style={{ marginRight: '5px', fontSize: '20px' }} />
                            Analytics
                        </Item>
                        <Item>
                            <Report style={{ marginRight: '5px', fontSize: '20px' }} />
                            Reports
                        </Item>
                    </List>
                </Menu>
            </Wrapper>
        </Container>
    );
}

import { BookmarkBorder, History, Settings } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;
const Sidebar = styled.div`
    flex: 1;
    margin-left: 30px;
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: rgb(251, 251, 255);
`;

const SidebarTitle = styled.h1`
    font-size: 18px;
    color: rgb(187, 186, 186);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SidebarItem = styled.div`
    margin-bottom: 10px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 10px 0;

    &:hover {
        background-color: rgb(240, 240, 255);
    }
`;

const Icon = styled.div`
    font-weight: 200;
    opacity: 0.7;
    display: flex;
`;
export default function Dashboard() {
    return (
        <Sidebar>
            <SidebarTitle>Dashboard</SidebarTitle>
            <Link to="/account" className="link">
                <SidebarItem>
                    <Icon>
                        <BookmarkBorder />
                    </Icon>
                    <span>Your Orders</span>
                </SidebarItem>
            </Link>
            <Link to="/history" className="link">
                <SidebarItem>
                    <Icon>
                        <History />
                    </Icon>
                    <span>History</span>
                </SidebarItem>
            </Link>
            <Link to="/settings" className="link">
                <SidebarItem>
                    <Icon>
                        <Settings />
                    </Icon>
                    <span>Change Password</span>
                </SidebarItem>
            </Link>
        </Sidebar>
    );
}

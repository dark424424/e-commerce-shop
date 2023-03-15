import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo';
import Topbar from '../components/Topbar';
import WidgetLg from '../components/WidgetLg';
import WidgetSm from '../components/WidgetSm';
import { userData } from '../data/Data';
import { userRequest } from '../requestMethods';

const Container = styled.div`
    flex: 4;
`;
const Wrapper = styled.div`
    display: flex;
    margin: 20px;
`;

export default function Home() {
    const [userStats, setUserStats] = useState([]);

    const MONTHS = useMemo(
        () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'],
        [],
    );

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('/users/stats');
                res.data.map((item) => {
                    setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], 'Active User': item.total }]);
                });
            } catch (e) {}
        };
        getStats();
    }, [MONTHS]);

    return (
        <>
            <Container>
                <FeaturedInfo />
                <Chart data={userStats} title="User Analytics" grid dataKey="Active User" />
                <Wrapper>
                    <WidgetSm />
                    <WidgetLg />
                </Wrapper>
            </Container>
        </>
    );
}

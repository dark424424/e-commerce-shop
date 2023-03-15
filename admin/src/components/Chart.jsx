import styled from 'styled-components';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <Container>
            <Title>{title}</Title>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    );
}

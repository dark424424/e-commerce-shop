import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { userRequest } from '../requestMethods';

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
`;
const Item = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
`;
const Title = styled.h1`
    font-size: 20px;
`;
const MoneyContainer = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
`;
const Money = styled.span`
    font-size: 30px;
    font-weight: bold;
`;
const MoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`;
const SubTitle = styled.h2`
    font-size: 15px;
    color: gray;
`;

const Icon = styled.div`
    margin-left: 5px;
    color: ${(props) => props.color};
`;

export default function FeaturedInfo() {
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get('orders/income');
                setIncome(res.data);

                setPerc((res.data[0].total * 100) / res.data[1].total - 100);
            } catch (e) {}
        };
        getIncome();
    }, []);

    return (
        <Container>
            <Item>
                <Title>Revanue</Title>
                <MoneyContainer>
                    <Money>${income[0]?.total}</Money>
                    <MoneyRate>
                        %{Math.floor(perc)}
                        {perc < 0 ? (
                            <Icon color="red">
                                <ArrowDownward style={{ fontSize: '16px' }} />
                            </Icon>
                        ) : (
                            <Icon color="green">
                                <ArrowUpward style={{ fontSize: '16px' }} />
                            </Icon>
                        )}
                    </MoneyRate>
                </MoneyContainer>
                <SubTitle>Compare to last month</SubTitle>
            </Item>
            <Item>
                <Title>Sales</Title>
                <MoneyContainer>
                    <Money>$3,225</Money>
                    <MoneyRate>
                        -5.23
                        <Icon color="red">
                            <ArrowDownward style={{ fontSize: '16px' }} />
                        </Icon>
                    </MoneyRate>
                </MoneyContainer>
                <SubTitle>Compare to last month</SubTitle>
            </Item>
            <Item>
                <Title>Cost</Title>
                <MoneyContainer>
                    <Money>$1,112</Money>
                    <MoneyRate>
                        +2.32
                        <Icon color="green">
                            <ArrowUpward style={{ fontSize: '16px' }} />
                        </Icon>
                    </MoneyRate>
                </MoneyContainer>
                <SubTitle>Compare to last month</SubTitle>
            </Item>
        </Container>
    );
}

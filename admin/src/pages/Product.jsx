import { Publish } from '@material-ui/icons';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Chart from '../components/Chart';
import { productData } from '../data/Data';
import { userRequest } from '../requestMethods';

const Container = styled.div`
    flex: 4;
    padding: 20px;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Title = styled.h1``;
const Button = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    color: white;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
`;

const Top = styled.div`
    display: flex;
`;
const TopLeft = styled.div`
    flex: 1;
`;
const TopRight = styled.div`
    flex: 1;
    padding: 20px;
    margin: 20px;
    box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
`;
const InfoTop = styled.div`
    display: flex;
    align-items: center;
`;
const InfoImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`;
const Name = styled.span`
    font-weight: 600;
`;
const InfoBot = styled.div`
    margin-top: 10px;
`;
const Item = styled.div`
    display: flex;
    width: 150px;
    justify-content: space-between;
`;
const InfoKey = styled.div``;
const InfoValue = styled.div`
    font-weight: 300;
`;
const Bot = styled.div`
    padding: 20px;
    margin: 20px;
    box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
`;

const Form = styled.form`
    display: flex;
    justify-content: space-between;
`;
const FormLeft = styled.div`
    display: flex;
    flex-direction: column;

    & > label {
        margin-bottom: 10px;
        color: gray;
    }

    & > input {
        margin-bottom: 10px;
        border: none;
        padding: 5px;
        border-bottom: 1px solid gray;
    }

    & > select {
        margin-bottom: 10px;
    }
`;
const Input = styled.input``;
const Select = styled.select``;
const FormRight = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const Upload = styled.form`
    display: flex;
    align-items: center;
`;
const UploadImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: contain;
    margin-right: 20px;
`;

const UpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    color: white;
    background-color: darkblue;
    cursor: pointer;
    padding: 5px;
    font-weight: 600;
`;

export default function Product() {
    const location = useLocation();
    const [productStat, setProductStat] = useState([]);
    const productId = location.pathname.split('/')[2];

    const MONTHS = useMemo(
        () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'],
        [],
    );

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('orders/income?pid=' + productId);
                res.data.map((item) => {
                    setProductStat((prev) => [...prev, { name: MONTHS[item._id - 1], Sales: item.total }]);
                });
            } catch (e) {
                console.log(e);
            }
        };
        getStats();
    }, [productId, MONTHS]);

    console.log(productStat);

    const product = useSelector((state) => state.product.products.find((product) => product._id === productId));

    return (
        <Container>
            <TitleContainer>
                <Title>Product</Title>
                <Link to="/newproduct">
                    <Button>Create</Button>
                </Link>
            </TitleContainer>
            <Top>
                <TopLeft>
                    <Chart data={productStat} dataKey="Sales" title="Sales Performance" />
                </TopLeft>
                <TopRight>
                    <InfoTop>
                        <InfoImg src={product.img} />
                        <Name>{product.title}</Name>
                    </InfoTop>
                    <InfoBot>
                        <Item>
                            <InfoKey>id:</InfoKey>
                            <InfoValue>{product._id}</InfoValue>
                        </Item>
                        <Item>
                            <InfoKey>sales:</InfoKey>
                            <InfoValue>1231</InfoValue>
                        </Item>
                        <Item>
                            <InfoKey>in stock:</InfoKey>
                            <InfoValue>{product.inStock}</InfoValue>
                        </Item>
                    </InfoBot>
                </TopRight>
            </Top>
            <Bot>
                <Form>
                    <FormLeft>
                        <label>Product Name</label>
                        <Input type="text" placeholder={product.title} />
                        <label>Product Description</label>
                        <Input type="text" placeholder={product.desc} />
                        <label>Product Price</label>
                        <Input type="text" placeholder={product.price} />
                        <label>In Stock</label>
                        <Select name="inStock" id="inStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </Select>
                    </FormLeft>
                    <FormRight>
                        <Upload>
                            <UploadImg src={product.img} />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: 'none' }} />
                        </Upload>
                        <UpdateButton>Update</UpdateButton>
                    </FormRight>
                </Form>
            </Bot>
        </Container>
    );
}

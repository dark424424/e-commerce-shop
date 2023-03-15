import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 450px;
    margin: 20px;
    background-color: #fbfbfb;
    border-radius: 10px;
    transition: all 0.2s ease;
    border: 2px solid #25a4a454;
    min-width: 300px;

    &:hover {
        transform: scale(1.1);
        z-index: 5;
    }
`;

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 2;
    margin: 10px;
    max-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    transition: all 0.5s ease;
    border-radius: 10px;

    &:hover ${Info} {
        opacity: 1;
    }
    ${mobile({
        width: '280px',
    })}
`;

// const Circle = styled.div`
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     background-color: white;
//     position: absolute;
// `;
const Image = styled.img`
    height: 75%;
    max-width: 75%;
    z-index: 2;
    max-width: 75%;
    border-radius: 10px;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Detail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
`;

const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;
    height: 20px;
    /* text-overflow: ellipsis; */
    overflow: hidden;
`;
const Price = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
`;
const Button = styled.button`
    color: teal;
    background-color: white;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    border: 1px solid teal;
    transition: all 0.5s ease;

    &:hover {
        background-color: teal;
        color: white;
    }
`;

export default function Product({ item }) {
    return (
        <Wrapper>
            <Container>
                {/* <Circle /> */}
                <Image src={item.img} />
                <Info>
                    <Icon>
                        <Link to={`/product/${item._id}`}>
                            <SearchOutlined />
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </Container>
            <Detail>
                <Link to={`/product/${item._id}`} style={{ color: 'inherit' }}>
                    <Title>{item.title}</Title>
                </Link>
                <Price>${item.price}</Price>
                <Button>Add to Cart</Button>
            </Detail>
        </Wrapper>
    );
}

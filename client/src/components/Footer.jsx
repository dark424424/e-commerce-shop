import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile, tablet, tabletAndmoblie } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({
        flexDirection: 'column',
    })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    padding: 20px;
    ${tablet({
        padding: '8px',
    })}
`;

const Logo = styled.h1`
    font-family: 'Kaushan Script', cursive;
`;
const Desc = styled.p`
    margin: 20px 0;
`;
const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const SocialIcon = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(probs) => probs.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${tabletAndmoblie({
        display: 'none',
    })};
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.li`
    width: 48%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        backgroundColor: '#fcf5f5',
    })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Payment = styled.img`
    width: 50%;
`;

export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>LongStudy</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus eligendi aut
                    distinctio doloribus ea facilis dignissimos magnam perspiciatis magni cum consequuntur voluptatibus,
                    numquam quia aperiam similique est dolore cumque.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <Item>Home</Item>
                    <Item>Cart</Item>
                    <Item>Man Fashion</Item>
                    <Item>Woman Fashion</Item>
                    <Item>Accessories</Item>
                    <Item>My Account</Item>
                    <Item>Order Tracking</Item>
                    <Item>Wishlist</Item>
                    <Item>Terms</Item>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: '10px' }} />
                    Vong Street, Ha Noi
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: '10px' }} />
                    +84 544 776 448
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: '10px' }} />
                    contact@longs.frontend
                </ContactItem>
                <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJZcirkLOyzrhgVbRWdLPWsrC3lz_jdq5abPUBmNGWJfAoCY8Ufd1noHDmf2CRqHwcw&usqp=CAU" />
            </Right>
        </Container>
    );
}

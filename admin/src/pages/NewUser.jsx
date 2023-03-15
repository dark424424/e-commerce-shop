import styled from 'styled-components';

const Container = styled.div`
    flex: 4;
`;

const Title = styled.h1``;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;
const Item = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;

    & > label {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: gray;
    }
`;
const Input = styled.input`
    height: 40px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
`;

export default function NewUser() {
    return (
        <Container>
            <Title>New User</Title>
            <Form>
                <Item>
                    <label>UserName</label>
                    <Input type="text" placeholder="alex" />
                </Item>
                <Item>
                    <label>Full Name</label>
                    <Input type="text" placeholder="Alex Long" />
                </Item>
                <Item>
                    <label>Email</label>
                    <Input type="text" placeholder="alex@gmail.com" />
                </Item>
                <Item>
                    <label>Password</label>
                    <Input type="password" placeholder="password" />
                </Item>
                <Item>
                    <label>Phone</label>
                    <Input type="text" placeholder="+84 213 2314" />
                </Item>
                <Item>
                    <label>Address</label>
                    <Input type="text" placeholder="Ha Noi | Viet Nam" />
                </Item>
                <Button>Create</Button>
            </Form>
        </Container>
    );
}

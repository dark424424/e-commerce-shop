import styled from 'styled-components';

const Container = styled.div`
    flex: 4;
`;
const Title = styled.h1``;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Item = styled.div`
    width: 250px;
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

    & > select {
        padding: 10px;
    }
`;
const Input = styled.input`
    height: 40px;
    padding: 10px;
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

export default function NewProduct() {
    return (
        <Container>
            <Title>New Product</Title>
            <Form>
                <Item>
                    <label>Image</label>
                    <Input type="file" id="file" />
                </Item>
                <Item>
                    <label>Name</label>
                    <Input type="text" placeholder="Adidas Shoes" />
                </Item>
                <Item>
                    <label>Stock</label>
                    <Input type="text" placeholder="123" />
                </Item>
                <Item>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </Item>

                <Button>Create</Button>
            </Form>
        </Container>
    );
}

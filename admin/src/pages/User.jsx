import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
const AddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
`;

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;
const Show = styled.div`
    flex: 1;
    padding: 20px;
    box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
`;
const Update = styled.div`
    flex: 2;
    padding: 20px;
    box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 1px -3px 17px -2px rgba(0, 0, 0, 0.58);
    margin-left: 20px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
`;
const TopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;
const Name = styled.span`
    font-weight: 600;
`;
const Job = styled.span`
    font-weight: 300;
`;
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
`;
const BottomTitle = styled.span`
    margin-top: 20px;
`;
const BottomInfo = styled.span`
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #444;
`;
const BottomInfoTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgba(175, 170, 170);
    margin-left: 10px;
`;

const UpdateTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
`;
const Form = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;
const Left = styled.div``;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    & > label {
        margin-bottom: 5px;
        font-size: 14px;
    }
`;
const UpdateInput = styled.input`
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
`;
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const RightUpload = styled.div`
    display: flex;
    align-items: center;
`;
const RightImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`;
const UpdateButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`;

export default function User() {
    return (
        <Container>
            <TitleContainer>
                <Title>Edit User</Title>
                <Link to="/newUser">
                    <AddButton>Create</AddButton>
                </Link>
            </TitleContainer>
            <UserContainer>
                <Show>
                    <Top>
                        <Image
                            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9A/production/_120424467_joy2.jpg"
                            alt="No Img"
                        />
                        <TopTitle>
                            <Name>Long Alex</Name>
                            <Job>Engineer</Job>
                        </TopTitle>
                    </Top>
                    <Bottom>
                        <BottomTitle>Acount Details</BottomTitle>
                        <BottomInfo>
                            <PermIdentity className="icon" />
                            <BottomInfoTitle>alexlong1231</BottomInfoTitle>
                        </BottomInfo>
                        <BottomInfo>
                            <CalendarToday className="icon" />
                            <BottomInfoTitle>29/01/2007</BottomInfoTitle>
                        </BottomInfo>
                        <BottomTitle>Contact Details</BottomTitle>
                        <BottomInfo>
                            <PhoneAndroid className="icon" />
                            <BottomInfoTitle>+8123 1231 23</BottomInfoTitle>
                        </BottomInfo>

                        <BottomInfo>
                            <MailOutline className="icon" />
                            <BottomInfoTitle>admiN@gmail.com</BottomInfoTitle>
                        </BottomInfo>
                        <BottomInfo>
                            <LocationSearching className="icon" />
                            <BottomInfoTitle>Ha Noi</BottomInfoTitle>
                        </BottomInfo>
                    </Bottom>
                </Show>
                <Update>
                    <UpdateTitle>Edit</UpdateTitle>
                    <Form>
                        <Left>
                            <Item>
                                <label>Username</label>
                                <UpdateInput type="text" placeholder="alexlong123" />
                            </Item>
                            <Item>
                                <label>Full Name</label>
                                <UpdateInput type="text" placeholder="Long Alex" />
                            </Item>
                            <Item>
                                <label>Email</label>
                                <UpdateInput type="text" placeholder="admiN@gmail.com" />
                            </Item>
                            <Item>
                                <label>Phone Num</label>
                                <UpdateInput type="text" placeholder="+8123 1231 23" />
                            </Item>{' '}
                            <Item>
                                <label>Address</label>
                                <UpdateInput type="text" placeholder="Ha Noi" />
                            </Item>
                        </Left>
                        <Right>
                            <RightUpload>
                                <RightImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gisele_Bundchen2.jpg/800px-Gisele_Bundchen2.jpg"></RightImage>
                                <label htmlFor="file">
                                    <Publish style={{ cursor: 'pointer' }} />
                                </label>
                                <input type="file" id="file" style={{ display: 'none' }} />
                            </RightUpload>
                            <UpdateButton>Update</UpdateButton>
                        </Right>
                    </Form>
                </Update>
            </UserContainer>
        </Container>
    );
}

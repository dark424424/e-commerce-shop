import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../data/Data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
    flex: 4;
`;
const EditButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`;
const DeleteButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #f90000;
    color: white;
    cursor: pointer;
`;

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'Username', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row.id}>
                            <EditButton>Edit</EditButton>
                        </Link>
                        <DeleteButton onClick={() => handleDelete(params.row.id)}>Delete</DeleteButton>
                    </>
                );
            },
        },
    ];

    return (
        <Container>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </Container>
    );
}

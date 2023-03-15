import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProduct } from '../redux/apiCalls';
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

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: contain;
    margin-right: 10px;
`;

export default function ProductsList() {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        getProduct(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteProduct(id, dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <Item>
                        <Image src={params.row.img} alt="" />
                        {params.row.title}
                    </Item>
                );
            },
        },
        { field: 'inStock', headerName: 'Stock', width: 200 },

        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row._id}>
                            <EditButton>Edit</EditButton>
                        </Link>
                        <DeleteButton onClick={() => handleDelete(params.row._id)}>Delete</DeleteButton>
                    </>
                );
            },
        },
    ];

    return (
        <Container>
            <DataGrid
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={8}
                checkboxSelection
            />
        </Container>
    );
}

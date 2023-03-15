import styled from 'styled-components';
import { popularProducts } from '../data';
import { useState, useEffect } from 'react';
import Product from './Product';
import config from '../../config';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
`;

export default function Products({ cat, filters, sort, func }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat ? `${config.apiURL}/api/products/?cat=${cat}` : `${config.apiURL}/api/products/?new=true`,
                );

                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value))),
            );
        if (func) {
            func(products.length);
        }
    }, [cat, filters, products]);

    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
        } else if (sort === 'asc') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        } else {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        }
    }, [sort]);
    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => <Product item={item} key={item.id}></Product>)
                : products.map((item) => <Product item={item} key={item.id}></Product>)}
        </Container>
    );
}

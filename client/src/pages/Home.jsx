import React from 'react';
import Annoucement from '../components/Annoucement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';
import styled from 'styled-components';

const TextWrapper = styled.div`
    display: flex;
    margin: 20px 40px 0px 40px;
`;

const Text = styled.h1`
    font-size: 40px;
    padding-left: 4px;
    font-family: 'Lora', serif;
`;

export default function Home() {
    return (
        <div style={{ backgroundColor: '#8ba8ae1a' }}>
            <Annoucement />
            <Navbar />
            <Slider />
            <TextWrapper>
                <Text>Hot Categories</Text>
            </TextWrapper>
            <Categories />
            <TextWrapper>
                <Text>Newest Products</Text>
            </TextWrapper>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
}

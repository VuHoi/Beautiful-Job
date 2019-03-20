import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
const Container = styled.div`
display:flex;
justify-content:center;

`;


function Index() {
    return (
        <Container>
            <ProgressBar value={60} title='Chuyên nghiêp' />
            <ProgressBar value={100} title='Phong cách' />
            <ProgressBar value={30}  title='Chuyên nghiêp'/>
            <ProgressBar value={10} title='Chuyên nghiêp' />
        </Container>
    );
};
export default Index;
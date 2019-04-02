import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import { Grid } from '@material-ui/core';
const Container = styled.div`
display:flex;
justify-content:center;
min-height:500px;
align-items:center;
`;


function Index() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center" >
                        <ProgressBar value={60} title='Chuyên nghiêp' />
                        <ProgressBar value={100} title='Phong cách' />
                        <ProgressBar value={30} title='Chuyên nghiêp' />
                        <ProgressBar value={10} title='Chuyên nghiêp' />
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    );
};
export default Index;
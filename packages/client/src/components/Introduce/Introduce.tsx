import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { PaperProps } from '@material-ui/core/Paper';
import { theme } from '../../styles/theme';

const StyledPaper = styled((props: PaperProps) => (
    <Paper  {...props} />
    ))`
        padding-top: ${theme.spacing.unit * 2}px;
        padding-bottom: ${theme.spacing.unit * 2}px;
        width: 70%;
        ${theme.mixins.gutters()}
    `;
const Container = styled.div`
        position: relative;
        display:flex;
        justify-content:center;
        height: 200px;
        margin-top:-50px;
        z-index:100;
        >div{
            display:flex;
            justify-content:space-between;
        }
`
function Introduce() {

    return (
        <Container>
            <StyledPaper elevation={1}>
                <div>
                    <Typography variant="h5" component="h3">
                        This is a sheet of paper.
                </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                </Typography>
                </div>
                <div>
                    <Typography variant="h5" component="h3">
                        This is a sheet of paper.
                </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                </Typography>
                </div>
                <div>
                    <Typography variant="h5" component="h3">
                        This is a sheet of paper.
                </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                </Typography>
                </div>
            </StyledPaper>
        </Container>
    );
};


export default Introduce;
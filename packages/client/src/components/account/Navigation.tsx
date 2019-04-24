import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
const Container = styled.div`
width:100vw;
display:flex;
justify-content:center;
>div{
width:70%;
display:flex;
justify-content:space-between;
}
`;
const Div = styled.div`
    display:flex;
    align-items: center;
`;

const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar >
                <Container>
                    <div>
                        <Div>
                            <IconButton color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" >
                                News
                      </Typography>
                        </Div>
                        <Button color="inherit">Login</Button>
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;




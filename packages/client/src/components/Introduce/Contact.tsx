import React from 'react';
import styled from 'styled-components';
import { TextField, Typography, Button, Grid } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import { ButtonProps } from '@material-ui/core/Button';
import { CurrentUser_QUERY } from '../../querys/home';
import { Query } from 'react-apollo';
import { theme } from '../../styles/theme';
const Container = styled.div`
    display:flex;
    justify-content:center;
    min-height:500px;
    align-items:center;
    flex-direction:column;
`;

const Form = styled.form`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:10px;
    ${theme.breakpoints.up('sm')}{
            width:450px !important;
        }
`;
const StyledTypography = styled((props: TypographyProps) => (
    <Typography  {...props} />
))`
    padding-bottom:30px;
  `;

const StyledSubmit = styled((props: ButtonProps) => (
    <Button  {...props} />
))`
    width:70px;
    margin:20px !important;
    padding:10px !important;
  `;
const StyledContainerCenter = styled.div`
    text-align:center;
    width:100%;
  `
const currentUser = <Query query={CurrentUser_QUERY}>
    {({ data }) => {
        console.log(data);
        return <div></div>
    }}
</Query>

function Contact() {
    return (
        <Container id="contact">
            <StyledTypography variant="h5" color="inherit">
                Liên hệ với chúng tôi

                {currentUser}
            </StyledTypography>
            <Form noValidate autoComplete="off">
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justify="center" >
                            <TextField
                                id="name"
                                label="Your name"
                                type="text"
                                name="name"
                                fullWidth
                                autoComplete="username"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                name="email"
                                fullWidth
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="message"
                                label="Message"
                                type="text"
                                name="message"
                                fullWidth
                                multiline
                                rows="4"
                                margin="normal"
                                variant="outlined"
                            />
                            <StyledContainerCenter>
                                <StyledSubmit variant="outlined" color="primary" >
                                    Gửi
                            </StyledSubmit>
                            </StyledContainerCenter>
                        </Grid>
                    </Grid>
                </Grid>
            </Form>
        </Container>
    );
};
export default Contact;
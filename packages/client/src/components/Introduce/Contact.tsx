import React from 'react';
import styled from 'styled-components';
import { TextField, Typography, Button } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import { ButtonProps } from '@material-ui/core/Button';
import { CurrentUser_QUERY } from '../../querys/home';
import { Query } from 'react-apollo';
const Container = styled.div`
    display:flex;
    justify-content:center;
    height:500px;
    align-items:center;
    flex-direction:column;
`;

const Form = styled.form`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:450px;
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
// const loginUser = <Mutation
//     mutation={Login_MUTATION}>
//     {mutate => <button onClick={() =>{ 
//         mutate().then(a=>console.log(a))
//         }}>delete listing</button>}
// </Mutation>
function Contact() {
    return (
        <Container>
            <StyledTypography variant="h5" color="inherit">
                Liên hệ với chúng tôi
               
                {currentUser}
            </StyledTypography>
            <Form noValidate autoComplete="off">
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
            </Form>
        </Container>
    );
};
export default Contact;
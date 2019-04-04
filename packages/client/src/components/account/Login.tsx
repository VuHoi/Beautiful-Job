import React from 'react';
import styled from 'styled-components';
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { backgroundColor } from '../../constants/colors';
import { PaperProps } from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

const Form = styled.form`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:450px;
`;


const StyledSubmit = styled((props: ButtonProps) => (
    <Button  {...props} />
))`
    margin:20px !important;
    padding:10px !important;
  `;
const StyledContainerCenter = styled.div`
    text-align:center;
    width:100%;
  `;

const StyledPaper = styled((props: PaperProps) => (
    <Paper  {...props} />
))`
    padding:30px !important;
    margin:30px !important
  `;

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
    background-color:${backgroundColor};
`;
const CenterDiv = styled.div`
text-align:center;
`;

const StyledLink = styled((props) => (
    <Link  {...props} />
))`
    padding:10px !important;
  `;
const FooterContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
`

function Login() {

    return (
        <Container>
            <StyledPaper elevation={1} >
                <CenterDiv>
                    <Typography variant="h6" color="inherit" >
                        Đăng nhập Beautiful Job
                      </Typography>
                </CenterDiv>
                <Form noValidate autoComplete="off">
                    <TextField
                        id="name"
                        label="Email hoặc số điện thoại"
                        type="text"
                        name="name"
                        fullWidth
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="password"
                        label="Mật khẩu"
                        type="password"
                        name="password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <StyledContainerCenter>
                        <StyledSubmit variant="outlined" color="primary" >
                            Đăng nhập
                    </StyledSubmit>
                    </StyledContainerCenter>
                    <FooterContainer>
                        <StyledLink to='/quenmatkhau' > Quên mật khẩu</StyledLink>
                        <StyledLink to='/dangky' > Đăng kí tài khoản</StyledLink>
                    </FooterContainer>
                </Form>
            </StyledPaper>
        </Container>
    );
};
export default Login;
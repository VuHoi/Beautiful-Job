import React from 'react';
import styled from 'styled-components';
import { TextField,Button} from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';


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
  `


  
 
function Login() {
  
    return (
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
    </Form>
    );
};
export default Login;
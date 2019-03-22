import React from 'react';
import styled from 'styled-components';
import { TextField,Button, Dialog} from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { useStore, useActions } from 'easy-peasy';
import { DialogTitle, DialogContent } from '../../styles/globalStyleMaterial';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

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
    const OpenLogin = useActions((dispatch:any) => dispatch.homeStore.setOpenLoginDialog);
    const handleClose = () => {
        OpenLogin(false);
    }
    const IsOpen:boolean = useStore((state:any) => state.homeStore.IsOpenLogin)
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={IsOpen}
        >
         <DialogTitle id="customized-dialog-title" onClose={handleClose} >
           Đăng nhập
          </DialogTitle>
          <DialogContent>
            <Container>
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
            </Container>
            </DialogContent>
        </Dialog>
    );
};
export default Login;
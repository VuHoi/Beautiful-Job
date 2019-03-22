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
const StyledTextField = styled((props) => (
    <TextField  {...props} />
))`
       margin:10px !important;
    `;
const DivHorizontal = styled.div`
    display:flex;
    justify-content:space-between;
 `
function Register() {
    const OpenRegister = useActions((dispatch: any) => dispatch.homeStore.setOpenRegisterDialog);
    const handleClose = () => {
        OpenRegister(false);
    }
    const IsOpen = useStore((state: any) => state.homeStore.IsOpenRegister);
    console.log(IsOpen)
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={IsOpen}
        >
            <DialogTitle id="customized-dialog-title" onClose={handleClose} >
             Đăng kí
          </DialogTitle>
            <DialogContent>
                <Container>
                    <Form noValidate autoComplete="off">
                        <DivHorizontal>
                            <StyledTextField
                                id="ho"
                                label="Họ"
                                type="text"
                                name="ho"
                                margin="normal"
                                variant="outlined"
                            />
                            <StyledTextField
                                id="tendem"
                                label="Tên đệm"
                                type="text"
                                name="tendem"
                                margin="normal"
                                variant="outlined"
                            />
                            <StyledTextField
                                id="ten"
                                label="Tên"
                                type="text"
                                name="ten"
                                margin="normal"
                                variant="outlined"
                            />
                        </DivHorizontal>
                        <TextField
                            id="email"
                            label="Email"
                            type="text"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="_password"
                            label="Mật khẩu"
                            type="password"
                            name="_password"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                         <TextField
                            id="_password_"
                            label="Nhập lại mật khẩu"
                            type="password"
                            name="_password_"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <StyledContainerCenter>
                            <StyledSubmit variant="outlined" color="primary" onClick={handleClose} >
                                Đăng kí
                        </StyledSubmit>
                        </StyledContainerCenter>
                    </Form>
                </Container>
            </DialogContent>
        </Dialog>
    );
};
export default Register;
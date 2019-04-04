import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TextField, Button, Dialog } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { useStore, useActions } from 'easy-peasy';
import { DialogTitle, DialogContent } from '../../styles/globalStyleMaterial';
import { ValidateRegister, FormControl, RegisterModel, EMAIL_REGEXP, PASSWORD_REGEXP } from '../../models/register';
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
        ${props => props.color == 'true' ? 'border:1px solid red !important' : ''};
    `;
const DivHorizontal = styled.div`
    display:flex;
    justify-content:space-between;
 `

function Register() {
    const OpenRegister = useActions((dispatch: any) => dispatch.homeStore.setOpenRegisterDialog);
    const [form, setForm] = useState<ValidateRegister>(new ValidateRegister());
    const model: RegisterModel = new RegisterModel()
    const onBlur = (field: FormControl) => {
        let formValue = form;
        formValue[field].valid = !(field === FormControl.email ? EMAIL_REGEXP.test(model[field].current.value) :
            field === FormControl.password || field === FormControl.confirmPassword ? PASSWORD_REGEXP.test(model[field].current.value) :
                !!model[field].current.value && model[field].current.value.length > 6);
        setForm(formValue);
    }
    const handleClose = () => {
        OpenRegister(false);
    }
    const IsOpen = useStore((state: any) => state.homeStore.IsOpenRegister);
    // console.log(IsOpen)
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
                                inputRef={model.firstName}
                                onBlur={() => onBlur(FormControl.firstName)}
                                color={form.firstName.valid.toString()}
                            />
                            <StyledTextField
                                id="tendem"
                                label="Tên đệm"
                                type="text"
                                name="tendem"
                                margin="normal"
                                variant="outlined"
                                inputRef={model.middleName}
                                onBlur={() => onBlur(FormControl.middleName)}
                                color={form.middleName.valid.toString()}
                            />
                            <StyledTextField
                                id="ten"
                                label="Tên"
                                type="text"
                                name="ten"
                                margin="normal"
                                variant="outlined"
                                inputRef={model.lastName}
                                onBlur={() => onBlur(FormControl.lastName)}
                                color={form.lastName.valid.toString()}
                            />
                        </DivHorizontal>
                        <StyledTextField
                            id="email"
                            label="Email"
                            type="text"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            inputRef={model.email}
                            onBlur={() => onBlur(FormControl.email)}
                            color={form.email.valid.toString()}
                        />
                        <StyledTextField
                            id="_password"
                            label="Mật khẩu"
                            type="password"
                            name="_password"
                            margin="normal"
                            variant="outlined"
                            inputRef={model.password}
                            onBlur={() => onBlur(FormControl.password)}
                            color={form.password.valid.toString()}
                        />
                        <StyledTextField
                            id="_password_"
                            label="Nhập lại mật khẩu"
                            type="password"
                            name="_password_"
                            margin="normal"
                            variant="outlined"
                            inputRef={model.confirmPassword}
                            onBlur={() => onBlur(FormControl.confirmPassword)}
                            color={form.confirmPassword.valid.toString()}
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
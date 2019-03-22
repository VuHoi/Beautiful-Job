import React from 'react';
import styled from 'styled-components';
import { TextField, Typography, Button, Dialog, withStyles, IconButton } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { useStore, useActions } from 'easy-peasy';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
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

const DialogTitle = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing.unit * 2,
      display:'flex',
      justifyContent:'center',
      fontWeight:900
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing.unit,
      top: theme.spacing.unit,
      color: theme.palette.grey[500],
    },
  }))((props:any) => {
    const { children, classes, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing.unit * 2,
    },
  }))(MuiDialogContent);
  
 
function Register() {
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
                        label="Tên đăng nhập"
                        type="text"
                        name="name"
                        fullWidth
                        autoComplete="username"
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
export default Register;
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DoneIcon from '@material-ui/icons/Done';
import HomeIcon from '@material-ui/icons/Home';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import { Button, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@material-ui/core';
import { useActions } from 'easy-peasy';
import { Mutation } from 'react-apollo';
import { Login_MUTATION } from '../../mutations/common';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonProps } from '@material-ui/core/Button';
import { theme } from '../../styles/theme';
import { Link } from 'react-scroll'

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        grow: {
            flexGrow: 1,
        },
        grow3: {
            flexGrow: 3,
        },
        button: {
            margin: theme.spacing.unit,
            fontSize: '1em',
            padding: '10px',
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        list: {
            width: 250,
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        account: {
            display: 'block',
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing.unit * 2,
            marginLeft: 0,
            width: '100%',
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing.unit * 3,
                width: 'auto',
                display: "block"
            },
        },
        searchIcon: {
            width: theme.spacing.unit * 9,
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
        },
        inputRoot: {
            color: 'white',
            width: '100%',

        },
        inputInput: {
            paddingTop: theme.spacing.unit,
            paddingRight: theme.spacing.unit,
            paddingBottom: theme.spacing.unit,
            paddingLeft: theme.spacing.unit * 10,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 200,
            },
        },

    });

export interface Props extends WithStyles<typeof styles> { }

const StyledButton = styled((props: ButtonProps) => (
    <Button  {...props} />
))`
    margin: ${theme.spacing.unit} !important;
    font-size: 1em !important;
    padding: 10px !important;
    display: none !important;
    ${theme.breakpoints.up('sm')} {
        display: block !important;
      }
  `;

function Navigation(props: Props) {
    const { classes } = props;
    const [left, setLeft] = useState<boolean>(false);
    // const [show, setShowPosition] = useState<boolean>(false);
    const [isRedirect, setRedirect] = useState<boolean>(false);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const toggleDrawer = (open: boolean) => () => {
        setLeft(open);
    };
    const loginUser = <Mutation
        mutation={Login_MUTATION}>
        {(login, { data }) => (
            <StyledButton variant="outlined" color="secondary" onClick={() => {
                login({ variables: { email: email.current.value, password: password.current.value } })
                    .then(() => {
                        setRedirect(true);
                    });
            }}>
                Đăng nhập
            </StyledButton>
        )}
    </Mutation>


    const renderRedirect = () => {
        if (isRedirect) {
            return <Redirect to='/home' />
        }
    }
    const OpenLogin = useActions((dispatch: any) => dispatch.homeStore.setOpenLoginDialog);
    const sideList = (
        <div className={classes.list}>
            <List>
                {['Home', 'You can', 'About', 'Contact'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <ArrowRightAlt />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            {/* <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );
    const OpenLoginDialog = () => {
        OpenLogin(true);
    }
    // window.addEventListener('scroll', () => {// lodash debounce method.
    //     let supportPageOffset = window.pageXOffset !== undefined;
    //     let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    //     let scrollPosition = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    //     console.log(scrollPosition)
    //     setShowPosition(scrollPosition > 0)

    // });
    return (

        <div className={classes.root}>
            {renderRedirect()}
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton onClick={toggleDrawer(true)} className={classes.menuButton} color="secondary" aria-label="Open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={left} onClose={toggleDrawer(false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            {sideList}
                        </div>
                    </Drawer>
                    <Typography className={classes.title} variant="h6" color="secondary" noWrap>
                        Beautiful Job
                     </Typography>
                    <div className={classes.grow} />
                    <StyledButton color="secondary" >
                        <Link className="test6" to="home" spy={true} smooth={true} duration={500}>
                            Home
                         </Link>
                    </StyledButton>
                    <div className={classes.grow} />
                    <StyledButton color="secondary" >

                        <Link className="test6" to="youcan" spy={true} smooth={true} duration={500}>
                            You can
                         </Link>
                    </StyledButton>
                    <div className={classes.grow} />
                    <StyledButton color="secondary" >

                        <Link className="test6" to="about" spy={true} smooth={true} duration={500}>
                            About
                         </Link>
                    </StyledButton>
                    <div className={classes.grow} />
                    <StyledButton color="secondary" >
                        <Link className="test6" to="contact" spy={true} smooth={true} duration={500}>
                            Contact
                         </Link>
                    </StyledButton>
                    <div className={classes.grow3} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <AccountCircle />
                        </div>
                        <InputBase
                            placeholder="Tên đăng nhập"
                            type="text"
                            inputRef={email}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <DoneIcon />
                        </div>
                        <InputBase
                            placeholder="Mật khẩu"
                            type="password"
                            inputRef={password}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    {loginUser}
                    <IconButton className={classes.account}
                        aria-haspopup="true"
                        color="secondary"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};
Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Navigation);
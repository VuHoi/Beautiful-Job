import React, { useState } from 'react';
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
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Button, List, ListItem, ListItemIcon, ListItemText, Divider, Drawer } from '@material-ui/core';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        grow: {
            flexGrow: 1,
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
        account:{
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


function Navigation(props: Props) {
    const { classes } = props;
    const [left, setLeft] = useState<boolean>(false);
    const toggleDrawer = (open: boolean) => () => {
        setLeft(open);
    };
    const sideList = (
        <div className={classes.list}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <AppBar position="static">
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
                    <Button color="secondary" className={classes.button}>
                        Home
                     </Button>
                    <div className={classes.grow} />
                    <Button color="secondary" className={classes.button}>
                        You can
                     </Button>
                    <div className={classes.grow} />
                    <Button color="secondary" className={classes.button}>
                        About
                     </Button>
                    <div className={classes.grow} />
                    <Button color="secondary" className={classes.button}>
                        Contact
                     </Button>
                    <div className={classes.grow} />
                    <div className={classes.grow} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <AccountCircle />
                        </div>
                        <InputBase
                            placeholder="Tên đăng nhập"
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
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    <Button variant="outlined" color="secondary" className={classes.button}>
                        Đăng nhập
                    </Button>
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
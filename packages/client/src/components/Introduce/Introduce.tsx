import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';


const styles = (theme: Theme) =>
    createStyles({
        root: {
            ...theme.mixins.gutters(),
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            width: '70%'
        }
    });

export interface Props extends WithStyles<typeof styles> { }

const Container = styled.div`
        position: relative;
        display:flex;
        justify-content:center;
        height: 200px;
        margin-top:-50px;
        z-index:100;
        >div{
            display:flex;
            justify-content:space-between;
        }
`

function Introduce(props: Props) {
    const { classes } = props;

    return (
        <Container>

            <Paper className={classes.root} elevation={1}>
                <div>
                    <Typography variant="h5" component="h3">
                        This is a sheet of paper.
                </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                </Typography>
                </div>
                <div>
                    <Typography variant="h5" component="h3">
                        This is a sheet of paper.
                </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                </Typography>
                </div>
                <div>
                    <Typography variant="h5" component="h3">
                        This is a sheet of paper.
                </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                </Typography>
                </div>
            </Paper>
        </Container>
    );
};
Introduce.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Introduce);
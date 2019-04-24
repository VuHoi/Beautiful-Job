import React from 'react';
import PropTypes from 'prop-types';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';


const styles = (theme: Theme) =>
    createStyles({
       

    });

export interface Props extends WithStyles<typeof styles> { }


function Infomation(props: Props) {
    const { classes } = props;
    return (
        <div>Hello</div>
    );
};
Infomation.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Infomation);
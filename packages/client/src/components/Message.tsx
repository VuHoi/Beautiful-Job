import React from 'react';
import PropTypes from 'prop-types';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';


const styles = (theme: Theme) =>
    createStyles({
       

    });

export interface Props extends WithStyles<typeof styles> { }


function Message(props: Props) {
    const { classes } = props;
   
    return (
        <div>Hello</div>
    );
};
Message.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Message);
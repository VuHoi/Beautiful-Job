import React from 'react';
import PropTypes from 'prop-types';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';


const styles = (theme: Theme) =>
    createStyles({
       

    });

export interface Props extends WithStyles<typeof styles> { }


function Footer(props: Props) {
    const { classes } = props;
   
    return (
        <div>Hello</div>
    );
};
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Footer);
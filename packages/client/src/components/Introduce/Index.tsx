import React from 'react';
import PropTypes from 'prop-types';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';


const styles = (theme: Theme) =>
    createStyles({
       

    });

export interface Props extends WithStyles<typeof styles> { }


function Index(props: Props) {
    const { classes } = props;
   
    return (
        <div>Hello</div>
    );
};
Index.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Index);
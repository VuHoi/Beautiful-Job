import React from 'react';
import PropTypes from 'prop-types';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';


const styles = (theme: Theme) =>
    createStyles({


    });
const Container = styled.div`
display:flex;
justify-content:center;

`;
export interface Props extends WithStyles<typeof styles> { }


function Index(props: Props) {
    const { classes } = props;
    return (
        <Container>
            <ProgressBar value={60} />
            <ProgressBar value={100} />
            <ProgressBar value={30} />
            <ProgressBar value={10} />
        </Container>
    );
};
Index.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Index);
import React from 'react';
import PropTypes from 'prop-types';
import ImageSlide from '../images/imageslide.jpg';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { footerColor } from '../constants/colors';
import { Typography, Button } from '@material-ui/core';

export interface Props extends WithStyles<typeof styles> { }
const styles = (theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing.unit,
            padding: '15px'
        }

    });

const height=700;

const Image = styled.img`
    width:100%;
    height:${height}px;
`
const Background_Slide = styled.div`
    position: relative;
    >div {
        position: absolute;
        top:0;
        left: 0;
        height:${height}px;
        width:60%;
        opacity:0.7;
        border-right: 200px solid transparent;
        border-bottom: ${height}px solid ${ footerColor};
       >div {
            width:80%;
            margin:0 10%;
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
            height: 600px;
       }
    }
`;
function Slide(props: Props) {
    const { classes } = props;

    return (
        <Background_Slide >
            <Image src={ImageSlide} alt="image slide" />
            <div>
                <div>
                    <Typography variant="h6" color="secondary">
                        Kết nối công việc của mọi người.
                     </Typography>
                    <br />
                    <Typography variant="h6" color="secondary">
                        Tìm kiếm việc làm nhanh chóng
                     </Typography>
                    <br />
                    <Typography variant="h6" color="secondary">
                        Thông tin chính xác
                     </Typography>
                    <br />
                    <Button variant="outlined" color="secondary" className={classes.button}>
                        Kết nối ngay
                  </Button>
                </div>
            </div>
        </Background_Slide>
    );
};
Slide.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Slide);
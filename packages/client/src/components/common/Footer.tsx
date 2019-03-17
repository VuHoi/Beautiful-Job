import React from 'react';
import PropTypes from 'prop-types';
import hand from '../../images/hand.jpg'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { footerColor } from '../../constants/colors';
import { Link, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import StarIcon from '@material-ui/icons/Star';
import { github } from '../../images/svg';
const styles = (theme: Theme) =>
    createStyles({
        title: {
            fontStyle: 'bold'
        }
    });
const Image = styled.img`
    width: 100%;
    height: 400px;
`

const Background_Footer = styled.div`
    position: relative;
    >div {
        position: absolute;
        top:0;
        left: 0;
        background-color: ${ footerColor};
        height:400px;
        width:100%;
        opacity:0.7;
        >div {
            margin:0 10%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            >div {
                margin-top:50px;
                height:400px;
                padding:30px;
                width:100%;
                display: flex;
                color:white;
                flex-direction: column;
            }
      }
    }
`;
const About = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width:70%;
    color:yellow;
`;
export interface Props extends WithStyles<typeof styles> { }


function Footer(props: Props) {
    const { classes } = props;
    const CategoriesJob = [
        'Công nghệ thông tin',
        'Kết toán',
        'Nhân viên văn phòng',
        'Tiếp viên hàng không',
        'Tiếp viên hàng không',
        'Xem thêm'
    ].map((text: string, index: number) => {
        return <div key={index}>
            <Link variant="h6" color="secondary" >
                {text}
            </Link>
        </div>;
    });
    const Menus = [
        'Home',
        'You can',
        'About',
        'Contact'
    ].map((text: string, index: number) => {
        return <div key={index}>
            <Link variant="h6" color="secondary" >
                {text}
            </Link>
        </div>;
    });
    const ContactFooter = <div>
        <label></label>
        <Typography variant="h6" color="secondary">
            <LocationOnIcon />  333 Tân Lập Dĩ An Bình Dương
      </Typography>
        <Typography variant="h6" color="secondary">
            <PhoneIcon />  0365240627
      </Typography>
        <Typography variant="h6" color="secondary">
            <EmailIcon />   Support.website@gmail.com
      </Typography>
    </div>
    const AboutFooter = <div>
        <Typography variant="h6" color="secondary">
            Công ty chúng tôi là một công ty hiện đại nhất thế giới  với đội ngũ nhân viên có trình độ cao.
      </Typography>
      <br/>
        <About>
        {github}  <StarIcon />  <StarIcon />  <StarIcon />
        </About>

    </div>
    return (
        <Background_Footer>
            <Image src={hand} alt="background footer" />
            <div  >
                <div >
                    <div>
                        <Link
                            variant="h4" color="secondary" className={classes.title}>
                            Gợi ý công việc
                         </Link>
                        <br />
                        {CategoriesJob}
                    </div>
                    <div>
                        <Link
                            variant="h4" color="secondary" className={classes.title}>
                            Lối tắt
                         </Link>
                        <br />
                        {Menus}</div>
                    <div>
                        <Link
                            variant="h4" color="secondary" className={classes.title}>
                            Thông tin
                         </Link>
                        <br />
                        {ContactFooter}</div>
                    <div>
                        <Link
                            variant="h4" color="secondary" className={classes.title}>
                            Giới thiệu chung
                         </Link>
                        <br />
                        {AboutFooter}</div>
                </div>
            </div>
        </Background_Footer>
    );
};
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Footer);
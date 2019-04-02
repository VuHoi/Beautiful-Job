import React from 'react';
import hand from '../../images/hand.jpg'
import styled from 'styled-components';
import { footerColor } from '../../constants/colors';
import { Link, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import StarIcon from '@material-ui/icons/Star';
import { github } from '../../images/svg';
import { theme } from '../../styles/theme';

const Image = styled.img`
    width: 100%;
    height: 400px;
    display:block !important;
    ${theme.breakpoints.down('xs')}{
        display:none !important;
        }
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
        padding-bottom:50px;
        opacity:0.7;
        ${theme.breakpoints.down('xs')}{
            height:auto !important;
        }
        >div {
            margin:0 10%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            ${theme.breakpoints.down('xs')}{
                flex-direction: column;
        }
            >div {
                margin-top:50px;
                height:400px;
                padding:30px;
                width:100%;
                display: flex;
                color:white;
                flex-direction: column;
                ${theme.breakpoints.down('xs')}{
               height:auto !important;
               padding:5px;
        }
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


function Footer() {

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
        <br />
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
                            variant="h4" color="secondary" >
                            Gợi ý công việc
                         </Link>
                        <br />
                        {CategoriesJob}
                    </div>
                    <div>
                        <Link
                            variant="h4" color="secondary" >
                            Lối tắt
                         </Link>
                        <br />
                        {Menus}</div>
                    <div>
                        <Link
                            variant="h4" color="secondary" >
                            Thông tin
                         </Link>
                        <br />
                        {ContactFooter}</div>
                    <div>
                        <Link
                            variant="h4" color="secondary" >
                            Giới thiệu chung
                         </Link>
                        <br />
                        {AboutFooter}</div>
                </div>
            </div>
        </Background_Footer>
    );
};



export default Footer;
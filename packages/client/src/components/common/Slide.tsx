import React from 'react';
import ImageSlide from '../../images/imageslide.jpg';
import styled from 'styled-components';
import { footerColor } from '../../constants/colors';
import { Typography, Button } from '@material-ui/core';
import { theme } from '../../styles/theme';
import { useActions } from 'easy-peasy';

const height = 900;
const heightMobile = 400;
const ButtonStyle = styled(({ ...otherProps }) => <Button {...otherProps} />)`
        margin: ${theme.spacing.unit};
        padding: 15px;
`;
const Image = styled.img`
    width:100%;
    height:${height}px;
    ${theme.breakpoints.down('sm')}{
        height:auto;
    }
`
const Background_Slide = styled.div`
    margin-top:50px;
    position: relative;
    >div {
        position: absolute;
        top:0;
        left: 0;
        height:${height}px;
        width:60%;
        opacity:0.7;
        border-right: 200px solid transparent;
        border-bottom: ${height}px solid ${footerColor};
        ${theme.breakpoints.down('sm')}{
            border-right: none;
            border-bottom: none;
            height:${heightMobile}px;
            width:100%;
        }
        ${theme.breakpoints.down('sm')}{
            height:300px;
        }
       >div {
            width:80%;
            margin:0 10%;
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
            height: ${height}px;
            text-align:center;
            ${theme.breakpoints.down('sm')}{
            height:${heightMobile}px;
        }
        ${theme.breakpoints.down('sm')}{
            height:300px;
        }
        >div{
            display:none;
            ${theme.breakpoints.up('sm')}{
                display:block;
            }
        }
       }
    }
`;
function Slide() {
    const OpenRegister = useActions((dispatch: any) => dispatch.homeStore.setOpenRegisterDialog);
    const OpenDialogRegister = () => {
        OpenRegister(true);
    }

    return (
        <Background_Slide id="home">
            <Image src={ImageSlide} alt="image slide" />
            <div>
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
                    </div>
                    <ButtonStyle variant="outlined" color="secondary" onClick={OpenDialogRegister}  >
                        Kết nối ngay
                  </ButtonStyle>
                </div>
            </div>
        </Background_Slide>
    );
};


export default Slide;
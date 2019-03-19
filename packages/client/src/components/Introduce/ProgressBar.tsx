import React, { useState, useEffect } from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import { mainColor, borderColor } from '../../constants/colors';
import { theme } from '../../styles/theme';


const styles = (theme: Theme) =>
    createStyles({
        fabProgress: {
            color: mainColor,
            position: 'absolute',
            top: 25,
            bottom: 25,
            zIndex: 1
        }
    });
const Container = styled.div`
    position: relative;
    width:200px;
    height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 100px;
    border: 3px solid ${borderColor};
`

const Content = styled.div`
  z-index:2;
  width:100px;
  text-align:center;
  word-wrap: break-word;
`
interface Value {
    value: number;
}
const ProgressBar: React.SFC<Value> = ({ value }) => {
    const [completed, setcompleted] = useState(0);
    const CustomProgressBar = () => {
        setcompleted(completed >= value ? value : completed + 1)
    }
    useEffect(() => {
        const timer = setInterval(CustomProgressBar, 15);
        if (completed >= value) {
            clearInterval(timer);
        }
        return () => {
            clearInterval(timer);
        }
    })
    return (
        <Container >
            <CircularProgress size={150} style={styles(theme).fabProgress} variant="determinate" value={completed} />
            <Content>{value}% <div>Chuyên nghiệp</div> </Content>
        </Container>
    );
};


export default ProgressBar;
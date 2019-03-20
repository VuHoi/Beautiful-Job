import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import { borderColor } from '../../constants/colors';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';


const Container = styled.div`
    position: relative;
    width:200px;
    height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 100px;
    border: 3px solid ${borderColor};
    padding:20px;
`

const Content = styled.div`
  z-index:2;
  width:100px;
  text-align:center;
  word-wrap: break-word;
`

const StyledProgressBar = styled((props: CircularProgressProps) => (
    <CircularProgress {...props} />
  ))`
        position: absolute;
        top: 5;
        bottom: 5;
        z-index: 1;
  `;
interface Value {
    value: number;
    title:string;
}
const ProgressBar: React.SFC<Value> = ({ value , title }) => {
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
            <StyledProgressBar size={190}  variant="determinate" value={completed} />
            <Content>{value}% <div>{title}</div> </Content>
        </Container>
    );
};


export default ProgressBar;
import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';


const Container = styled.div`
display:flex;
justify-content:center;

`;

const StyledButton = styled((props: ButtonProps) => (
    <Button {...props} />
  ))`
    color:red;

  `
function About() {
    return (
        <Container>
          <StyledButton variant="outlined" color="primary">hahahahah</StyledButton>  
        </Container>
    );
};
export default About;
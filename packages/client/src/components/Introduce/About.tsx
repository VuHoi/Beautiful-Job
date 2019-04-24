import React from 'react';
import styled from 'styled-components';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import { theme } from '../../styles/theme';
import hinh1 from '../../images/hinh1.jpg';
import hinh2 from '../../images/hinh2.jpg';
import { Typography, Grid } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
const Container = styled.div`
display:flex;
justify-content:center;
`;
interface CustomPaperProps extends PaperProps {
  valuemargin?: number;
}
const StyledPaper = styled((props: CustomPaperProps) => (
  <Paper  {...props} />
))`
      padding-top: ${theme.spacing.unit * 2}px;
      padding-bottom: ${theme.spacing.unit * 2}px;
      ${theme.mixins.gutters()};
      margin :${(props) => props.valuemargin}px;
  `;
const StyledDiv = styled.div`
      display:flex;
      justify-content:center;
      width:100%;
`;
const StyledImage = styled.img`
      width:200px;
      height:250px;
      margin: 30px;

`
const Content = styled.div`
     text-align:center;
`;
const ContainerInfo = styled.div`
      margin-top:20px;
      display:flex;
      justify-content:space-between;
`
function About() {
  return (
    <StyledPaper elevation={1} valuemargin={0} id="about">
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify="center" >
              <StyledPaper valuemargin={15}>
                <StyledImage src={hinh1} alt="nha phat trien beautiful job" />
                <StyledDiv>
                  <Content>
                    <Typography variant="h6" color="inherit">
                      Team member
            </Typography>
                    <Typography variant="body1" color="inherit">
                      Front-end dev
            </Typography>
                    <ContainerInfo>
                      <FaceIcon /><FaceIcon /><FaceIcon /><FaceIcon />
                    </ContainerInfo>
                  </Content>
                </StyledDiv>
              </StyledPaper>
              <StyledPaper valuemargin={15}>
                <StyledImage src={hinh2} alt="nha phat trien beautiful job" />
                <StyledDiv>
                  <Content>
                    <Typography variant="h6" color="inherit">
                      Team member
            </Typography>
                    <Typography variant="body1" color="inherit">
                      Front-end dev
            </Typography>
                    <ContainerInfo>
                      <FaceIcon /><FaceIcon /><FaceIcon /><FaceIcon />
                    </ContainerInfo>
                  </Content>
                </StyledDiv>
              </StyledPaper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledPaper>
  );
};
export default About;
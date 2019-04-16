import React from 'react';
import { Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import styled from 'styled-components';
import { CardProps } from '@material-ui/core/Card';
import { TypographyProps } from '@material-ui/core/Typography';
import { CardActionsProps } from '@material-ui/core/CardActions';
import { CenterTypography } from '../common-type';
import { theme } from '../../styles/theme';

const Container = styled.div`
    display:flex;
    justify-content:center;
    margin-top:100px;
    flex-direction:column;
    align-items:center;
    width:100%;
`;
const Div = (props: any) => <div {...props}></div>
const ContainerCard = styled(Div)`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    margin:${props => props.marintop}px 10% 0 10%;
    ${theme.breakpoints.down('xs')}{
            flex-direction:column;
        }
    >div{
        margin:10px;
    }
`;
const StyledCard = styled((props: CardProps) => (
    <Card  {...props} />
))`
    min-width: 33.3%;
`

const StyledTypography = styled((props: TypographyProps) => (
    <Typography  {...props} />
))`
    font-size: 18;
`

const StyledCardActions = styled((props: CardActionsProps) => (
    <CardActions  {...props} />
))`
    display: flex;
    justify-content: flex-end;
`
function YouCan() {
    const cards = [
        {
            title: 'Kết nối công việc',
            description: 'Giúp mọi người có cái nhìn tổng quan hơn về việc làm trong các lĩnh vực mình chon'
        },
        {
            title: 'Kết nối công việc',
            description: 'Giúp mọi người có cái nhìn tổng quan hơn về việc làm trong các lĩnh vực mình chon'
        },
        {
            title: 'Kết nối công việc',
            description: 'Giúp mọi người có cái nhìn tổng quan hơn về việc làm trong các lĩnh vực mình chon'
        },

    ].map((item, index) =>
        <div key={index}>
            <StyledCard>
                <CardContent>
                    <StyledTypography color="inherit" gutterBottom>
                        {item.title}
                    </StyledTypography>
                    <StyledTypography variant="body1" color="textSecondary" gutterBottom>
                        {item.description}
                    </StyledTypography>
                </CardContent>
                <StyledCardActions>
                    <Button variant="outlined" size="small">Learn More</Button>
                </StyledCardActions>
            </StyledCard>
        </div>)
    return (
        <div>
            <Container id="youcan">
                <Typography variant="h5" color="inherit" >
                    This is a sheet of paper.
                </Typography>
                <br />
                <CenterTypography variant="body1" color="inherit" style={{ maxWidth: '700px' }} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </CenterTypography>

            </Container>
            <ContainerCard marintop="50">
                {cards}
            </ContainerCard>
            <ContainerCard marintop="0">
                {cards}
            </ContainerCard>
        </div>
    );
};


export default YouCan;
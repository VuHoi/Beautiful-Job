import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import styled from 'styled-components';


const styles = (theme: Theme) =>
    createStyles({
        card: {
            minWidth: '33%',
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 18,
        },
        right: {
            display: "flex",
            justifyContent: "flex-end"
        },

    });

export interface Props extends WithStyles<typeof styles> { }

const Container = styled.div`
    display:flex;
    justify-content:center;
    margin-top:100px;
    flex-direction:column;
    align-items:center;
    width:100%;
`;
const Div = (props:any)=><div {...props}></div>
const ContainerCard = styled(Div)`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    margin:${props => props.marintop}px 15% 0 10%;
    >div{
        margin:10px;
    }
`;

function YouCan(props: Props) {
    const { classes } = props;
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

    ].map((item,index) =>
        <div key={index}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="inherit" gutterBottom>
                        {item.title}
                    </Typography>
                    <Typography className={classes.title} variant="body1" color="textSecondary" gutterBottom>
                        {item.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.right}>
                    <Button variant="outlined" size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>)
    return (
        <div>
            <Container>
                <Typography variant="h5" color="inherit" >
                    This is a sheet of paper.
                </Typography>
                <br />
                <Typography variant="body1" color="inherit" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </Typography>
                <Typography variant="body1" color="inherit" >
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
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
YouCan.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(YouCan);
import React from 'react';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:50px;


`

const Header = styled.div`
    

`
export const SimpleFooter: React.SFC = () => {
    return (
        <Container>
            <Header>
                Thêm những đưởng tắt ở đây...  hyperlink
            </Header>

            <Divider />
        </Container>
    );
};
import styled from "styled-components";
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';

export const CenterTypography = styled((props: TypographyProps) => (
    <Typography  {...props} />
))`
text-align:center;
padding:10px;
`;
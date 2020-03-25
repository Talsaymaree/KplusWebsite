import styled from 'styled-components';

export const AbsoluteCenteredDiv = styled.div`
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%); 
`

export const AbsoluteMiddleDiv = styled.div`
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%); 
`
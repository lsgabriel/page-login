import styled from 'styled-components';

export const Input = styled.input`
    width:50%;
    border: solid 1px #CBCBCB;border-radius:15px;color:#444444;
    padding: 8px;margin:1px;font-weight:500;margin-bottom: 10px;

    @media screen and (max-width: 380px) {
      width: 90vw;
    }
`;
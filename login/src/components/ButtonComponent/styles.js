import styled from 'styled-components';

export const Btn = styled.button`
    width:50%;
    border: none;border-radius:15px;color:whitesmoke;
    padding: 8px;margin:1px;font-weight:500;
    margin-bottom: 10px;

    @media screen and (max-width: 380px) {
      width: 48%;
    }
`;
import styled from "styled-components";


export const Container = styled.div`
  height: 100vh; 
  background-color: #36393F;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 21px;
  padding: 0;

  svg {
    width: 100px;
    height: 100px;
    color: #539ADA;
  }
`;
export const Button = styled.button`
   outline: none;
   font-size: 18px;
   padding: 14px 18px;
   cursor: pointer;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Info = styled.span`
  font-size: 18px;
  text-align: center;
  max-width: 500px;
`;
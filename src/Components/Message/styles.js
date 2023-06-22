import styled from "styled-components";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;

  &.me {
    > div {
      color: #fff;
      background-color: #539ADA;
    }
    justify-content: right;
  }
`;

export const Content = styled.div`
  color: #fff;
  background-color: #46474A;
  border-radius: 10px;
  box-shadow: 0 1px 1px #222324;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
`;

export const Message = styled.span`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.span`
  font-size: 11px;
  color: #fff;
  text-align: right;
  height: 15px;
  margin: -5px 5px 0;
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 20px 16px;
  cursor: pointer;
  background: #36393F; 

  &:hover {
    background-color: #43464E;
  }

  svg {
    width: 3    px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }

  &.active {
    background-color: #505050;
    
  }
`;

export const Name = styled.span`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;
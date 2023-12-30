import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 70px;
text-align: left;
margin-bottom: 3.5rem;

input{
  width: 100%;
  height: 30px;
  background: transparent;
  border: none;
  border-bottom: 4px solid ${({ theme }) => theme.COLORS.WHITE};
  opacity: 0.7;  
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 24px; 
  padding: 1rem;
  outline: none;
}
label{
  font-size: 30px;
  width: 100%;
  letter-spacing: 1px;
}
`
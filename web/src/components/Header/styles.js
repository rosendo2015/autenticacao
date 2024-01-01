import styled from "styled-components"
export const Container = styled.div`
width: 100%;
height: 105px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
padding: 3rem;
display: flex;
align-items: center;
justify-content: space-between;
>img{
  width: 70px;
}
.wrapperLeftHeader{
  display: flex;
  align-items: center;
  gap:50px;
}
>.wrapperLeftHeader span{
  font-size: 50px;
}
>.wrapperLeftHeader svg{
  cursor: pointer;
}
`
import { createGlobalStyle } from "styled-components"
export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Bebas Neue', sans-serif;
  background: rgba(5,26,52,1);
  background: linear-gradient(90deg, rgba(4,26,52,1) 0%, rgba(5,39,9,1) 100%);

  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.COLORS.WHITE};
}
`
import { createGlobalStyle } from "styled-components"
export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.COLORS.WHITE};
}
`
import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
padding: 3rem;

form{
  max-width: 500px;
}
form header{
  padding-bottom: 3rem;
  text-align: center;
}
p{
  font-size: 78px;
  letter-spacing: 15px;
}
a{
  font-size: 26px;
  line-height: 100%;
  color: ${({ theme }) => theme.COLORS.ORANGERED};
  letter-spacing: 1.5px;
}
span a,
span{
  letter-spacing: 1px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.COLORS.ORANGERED};
}
.wrapperImg img{
  width: 730px;
}
.wrapperForm{
  padding: 3rem; 
}
form footer{
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
`
import styled from "styled-components"
export const Container = styled.button`
font-family: 'Bebas Neue', sans-serif;
display: block;

border-radius: 9999px;

background: linear-gradient(0deg, rgba(237,59,7,1) 2%, rgba(182,7,237,1) 100%);
border: none;
color: ${({ theme }) => theme.COLORS.WHITE};
padding: 0.5rem 3rem;
font-weight: 500;
font-size: 24px;
letter-spacing: 1px;
cursor: pointer;

&:hover{  
background: linear-gradient(0deg, rgba(182,7,237,1) 2%, rgba(237,59,7,1) 100%);
}
`
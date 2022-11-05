import styled from "styled-components"
import Options from "./Options"

const StyledDiv = styled.div`
  display: flex;  
  justify-content: space-between;   
  max-width:100%;
`
const OptionsDiv = styled.div`
  display: flex;
  gap:40px;
`
const Logo = styled.img`
  max-width: 100px;
  max-height: 100px;
`

function Header(){
  return(
    <StyledDiv>
        <Logo src="./logo.svg"></Logo>  
        <OptionsDiv>
          <Options href="">Home</Options>
          <Options href="">New</Options>
          <Options href="">Popular</Options>
          <Options href="">Trending</Options>
          <Options href="">Categories</Options>       
        </OptionsDiv>                          
    </StyledDiv>
  )
}

export default Header
import styled from "styled-components"

import Header from "../src/components/Header"
import TextColumn from "../src/components/TextColumn"
import Text1 from "../src/components/Text1"

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;  
  max-height: 90vh;
`
const Div1 = styled.div`
  display: flex;
  max-width:100%;
  background-color: red;
  padding: 0;
  margin:0;
`
const Image = styled.img`
  max-width:100%;
  max-height: auto;    
  background-color: navy;
`
const ContDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  gap:30px;
`
const ContDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: navy;
  max-width: 30%;
`

const Div2 = styled.div`
  display: flex;
`

function HomePage(){
  return(
      <StyleDiv>
        <Header />
        <Div1>
          <ContDiv1>
            <Image src="./image-web-desktop.jpg"></Image>
            <Text1 />
          </ContDiv1>      
          <ContDiv2>
            <TextColumn />
          </ContDiv2>    
        </Div1>         
      </StyleDiv> 
  )
}

export default HomePage
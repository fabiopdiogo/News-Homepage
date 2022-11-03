import styled from "styled-components"

import Header from "../src/components/Header"
import Options from "../src/components/Options"
import Text1 from "../src/components/Text1"

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const Div1 = styled.div`
  display: flex;
  width:100%;
  height: 50vh;
  gap: 30px;
`
const Image = styled.img`
    max-width:100%;
    max-height: auto;    
    background-color: navy;
`
const ContDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  gap:30px;
`
const ContDiv2 = styled.div`
  background-color: navy;
  width: 100%;
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

          </ContDiv2>    
        </Div1>  
       
      </StyleDiv> 
  )
}

export default HomePage
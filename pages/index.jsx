import styled from "styled-components"

import Header from "../src/components/Header"
import TextColumn from "../src/components/TextColumn"
import Text1 from "../src/components/Text1"
import Card from "../src/components/Card"

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;  
  max-height: 90vh;
  padding: 0;
  margin:180px;
  padding-bottom: 80px;
`
const Div1 = styled.div`
  display: flex;
  max-width:100%; 
  gap:30px; 
`
const Div2 = styled.div`
  display: flex;
  max-width:100%; 
  gap:30px; 
  justify-content: space-between;
`
const Image = styled.img`
  max-width:100%;
  max-height: auto;    
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
  width: 30%;
  padding: 50px 35px;
  background-color: hsl(240, 100%, 5%);
`

function HomePage(){
  return(
      <StyleDiv>
        <Header />
        <Div1>
          <ContDiv1>
            <Image src="image-web-desktop.jpg"></Image>
            <Text1 />
          </ContDiv1>      
          <ContDiv2>
            <TextColumn />
          </ContDiv2>    
        </Div1>    
        <Div2>            
          <Card
           src="image-retro-pcs.jpg"
           title="01"
           subtitle="Reviving Retro PCs">
           What happens when old PCs are given modern upgrades?
          </Card>
          <Card
           src="image-top-laptops.jpg"
           title="02"
           subtitle="Top 10 Laptops of 2022">
           Our best picks for various needs and budgets.
          </Card>
          <Card
           src="image-gaming-growth.jpg"
           title="03"
           subtitle="The Growth of Gaming">
           How the pandemic has sparked fresh opportunities.
          </Card>        
        </Div2>

      </StyleDiv> 
  )
}

export default HomePage
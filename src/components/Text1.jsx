import styled from "styled-components"

const Div1 = styled.div`
  display: flex;
  background-color: navy;
`
const DivButton = styled.div`
  display: flex;
  flex-direction: column;  
  width: 100%;
  background-color: orange;
`

const BoldText = styled.p`
  font-weight: bold;
  font-size: 60px;
  max-width: 50%;
  background-color: orange;
`
const Text = styled.p`
  font-weight: bold;
`
const Button = styled.button`
  padding: 15px;
  max-width: 150px;
`

function Text1(){
  return(
    <Div1>
      <BoldText>The Bright Future of Web 3.0?</BoldText>
      <DivButton>
          <Text> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</Text>
          <Button>Read More</Button>
      </DivButton>
      
    </Div1>
    
  )
}

export default Text1
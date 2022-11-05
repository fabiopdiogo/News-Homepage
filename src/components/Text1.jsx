import styled from "styled-components"

const Div1 = styled.div`
  display: flex;
`
const DivButton = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: space-between;    
  padding-left: 50px;
`
const BoldText = styled.p`
  font-weight: 700;
  font-size: 60px;
  max-width: 50%;
`
const Text = styled.p`
  font-weight: bold;
  color:hsl(240, 100%, 5%);
`
const Button = styled.button`
  padding: 15px;
  max-width: 150px;
  border:none;
  background-color: hsl(5, 85%, 63%);
  color: white;
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
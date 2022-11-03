import styled from "styled-components"

const Div1 = styled.div`
  display: flex;
`
const BoldText = styled.p`
  font-weight: bold;
  font-size: 70px;
`
const Text = styled.p`
  font-weight: bold;
  max-width: 100%;
`

function Text1(){
  return(
    <Div1>
      <BoldText>The Bright Future of Web 3.0?</BoldText>
      <Text> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</Text>
    </Div1>
    
  )
}

export default Text1
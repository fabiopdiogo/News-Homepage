import styled from "styled-components"

const Div1 = styled.div`
  display: flex;
  flex-direction:column;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 60px;
  max-width: 50%;
  background-color: red;
  color: orange;
`
const Subtitle = styled.p`
  font-weight: bold;
  font-size: 30px;
  max-width: 50%;
  background-color: red;
  color: white;
`
function TextColumn(){
  return(
    <Div1>
      <Title>New</Title>
      <Subtitle>Hydrogen VS Electric Cars</Subtitle>
    </Div1>
    
  )
}

export default TextColumn
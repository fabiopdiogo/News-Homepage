import styled from "styled-components"

const Div1 = styled.div`
  display: flex;
  flex-direction:column;
  max-width: 100%;
  justify-content: space-between;
`
const Container = styled.div`
  display: flex;
  flex-direction:column;
  max-width: 100%;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 40px;
  max-width: 100%;
  color: hsl(35, 77%, 62%);
  margin-bottom: 20px;
`
const Subtitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  color: white;
  margin-bottom: 10px;
`
const Content = styled.p`
  font-size: 15px;
  width: 100%;
  color: grey;
`
const Underline = styled.p`
  font-size: 15px;
  width: 100%;  
  color: grey;  
  margin-bottom: 20px;
`
function TextColumn(){
  return(
    <Div1>
      <Title>New</Title>
      <Container>
        <Subtitle>Hydrogen VS Electric Cars</Subtitle>
        <Content>Will hydrogen-fueled cars ever catch up to EVs?</Content>
      </Container>      
      <Underline>______________________________________</Underline>
      <Container>
        <Subtitle>The Downsides of AI Artistry</Subtitle>
        <Content>What are the possible adverse effects of on-demand AI image generation?</Content>      
      </Container>      
      <Underline>______________________________________</Underline>
      <Container>
        <Subtitle>Is VC Funding Drying Up?</Subtitle>
        <Content>Private funding by VC firms is down 50% YOY. We take a look at what that means.</Content>
      </Container>
      
    </Div1>
    
  )
}

export default TextColumn
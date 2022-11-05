import styled from "styled-components"

const CardDiv = styled.div`
  display: flex;
`

const Image = styled.img`
   max-width:100px;
   max-height: auto; 
`

const Title = styled.p`
  font-weight: bold;
  font-size: 40px;
  max-width: 100%;
  color: grey;
`
const Subtitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  margin-bottom:0px;
  color:hsl(240, 100%, 5%);
`
const Content = styled.p`
  font-size: 15px;
  width: 100%;
  color: grey;
`
const DivText = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: space-between;  
  padding-left: 50px;
`

function Cards({src,title,subtitle,children}){
  return(
    <div>
      <CardDiv>
        <Image src={src} />
        <DivText>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Content>{children}</Content>
        </DivText>
        
      </CardDiv>
    </div>
  )
}

export default Cards

import styled from "styled-components"

const Option = styled.div`
  color: blue;
`

function Options ({href,children}){
  return(
    <Option><a href={href}>{children}</a></Option>
  )
}

export default Options
import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const EmailAPICont = styled.div`
`
const EmailAPI = () =>{
  return <EmailAPICont>
<a href='mailto:?subject=Dear Patient!&body=You have an appointment with our doctor at ...'><Button>Send</Button></a>  
</EmailAPICont>
}

export default EmailAPI
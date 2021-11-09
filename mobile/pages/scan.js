import React from "react";
import styled from "styled-components";

import HeroAvatar from "../comps/HeroAvatar";

const ScanCont = styled.View`
  width:100%;
  height:100%;
`

const AvatarCont = styled.View`

`
const BodyCont = styled.View`

`

const scan = ()=>{
  return <ScanCont>
    <AvatarCont>
      <HeroAvatar/>
    </AvatarCont>

    <BodyCont>

    </BodyCont>
  </ScanCont>
}

export default scan

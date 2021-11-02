import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Tab, Button, } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Clinics',
    pane: {
      key: 'tab2',
      content: 'Image',
      textAlign: 'center',
      
    },
  },
  {
    menuItem: 'Doctors',
    pane: {
      key: 'tab3',
      content: (
        <Button>
          This is a test
        </Button>
      ),
    },
  },
]


const HorizonTab = () =>{
  return <Tab  style={{width:1400}} panes={panes} renderActiveOnly={false} >

  </Tab>
}

export default HorizonTab
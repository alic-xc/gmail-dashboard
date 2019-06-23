/* 
  
  Designing google mail dashboard as a project in react
  
*/

import React, {Component } from 'react';
import { Box, Grommet } from 'grommet'
import AppBar from './components/Header'
import { LeftSidebar, RightSidebar } from './components/Sidebar';
import Content from './components/Content'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

(() => library.add(fab, fas))()

const theme = {

  global:{
    colors:{
      brand:'#f7f7f7'
    },
    font:{
      size:'12px',
    },
  }
}

class App extends Component{

  constructor(props){
    super(props)
    this.state = {sideBar:true}
  }

  toggleSidebar = () =>{

    this.setState((prevState)=>({sideBar:!prevState.sideBar}))
  }
  render(){
    const {sideBar} = this.state
    return (
      <Grommet theme={theme} full> 
        <Box fill>
          <AppBar toggleSidebar = { this.toggleSidebar } />
              <Box 
                direction='row'
                flex
                overflow={{horizontal:'hidden'}}
                >
                  <LeftSidebar sideBar={sideBar} /> 
                    
                  
                  
                    <Content />
                  
                  
                    <RightSidebar/>  
                  
              </Box>
          </Box>  
        </Grommet>
    )
  }
}


export default App;

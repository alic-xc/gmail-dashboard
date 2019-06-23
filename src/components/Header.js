import React from 'react'
import {Box,Button,Text,  } from 'grommet'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// Designing the header of the app

const AppBar = props =>{

    return (
        <Box
          tag='header'
          direction='row'
          style = {{borderBottom:"1px solid #eee"}}
          justify='between'
          background='white'
          pad = {{left:'xsmall', right:'xsmall', top:'small', bottom:'xsmall' }}

        >
            <Box
              tag='section' 
              direction='row'
              justify='flex-start'
              align='center' 
              width='small'>
                  <Button  onClick={props.toggleSidebar}><FontAwesomeIcon  size='2x' icon={['fas','bars']}/></Button>
                  
                  <Text size='large'> Gmail </Text>
            </Box>
            <Box 
              tag='section'
              direction='row'
              justify='start'
              align='center'
              background='#f6f6f6'
              style={{borderRadius:'8px'}}
              width='large'
               >
                  <FontAwesomeIcon icon={['fas','search']}/>
                  <input type='text' placeholder='Search Mail' />
              </Box>

              <Box 
              tag='section'
              direction='row'
              justify='baseline'
              align='center' 
              width='small'>
                  
              </Box>
            
        </Box>
    )

}

export default AppBar
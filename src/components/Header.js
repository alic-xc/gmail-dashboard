import React from 'react'
import {Box,Button,Text,  } from 'grommet'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Menu,Apps, CircleQuestion, UserSettings} from 'grommet-icons'
// Designing the header of the app
const searchStyle = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    background:'#f6f6f6',
    borderRadius:'8px',
    width:'80%', 
    height:'45px',

}
const appStyle = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'50%',
    marginLeft:'50%'
}
const AppBar = props =>{

    return (
        <Box
          tag='header'
          direction='row'
          style = {{borderBottom:"1px solid #eee"}}
          justify='between'
          align='center'
          background='white'
          pad = {{left:'xsmall', right:'xsmall', top:'small', bottom:'xsmall' }}

        >
            <Box
              tag='section' 
              direction='row'
              justify='flex-start'
              align='center' 
              basis='1/4'
              >
                  <Button icon={<Menu />} onClick={props.toggleSidebar} />
                  
                  <Text size='large'> Gmail </Text>
            </Box>
            <Box 
              tag='section'
              direction='row'
              justify='start'
              align='center'
              basis='3/4'

               >
                   <div style={searchStyle} >
                    <span style={{display:'inline-block',marginLeft:'15px'}}><FontAwesomeIcon icon={['fas','search']} size='lg'/></span>
                    <input type='text' placeholder='Search Mail' />
                    <Button icon={<FontAwesomeIcon icon={['fas','caret-down']}/>}/>
                  </div>
              </Box>

              <Box 
              tag='section' 
              basis='1/4'
              
              >    
              <div style={appStyle}>
                  <Button icon={<CircleQuestion />}/>
                  <Button icon={<Apps />}/>
                  <Button icon={<UserSettings />}/>
                  </div>
              </Box>
            
        </Box>
    )

}

export default AppBar
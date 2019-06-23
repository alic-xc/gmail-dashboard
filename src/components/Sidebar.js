import React from 'react'
import {Box, Button } from 'grommet'
import {MailOption, Star, FormAdd, Add, UserManager, UserNew, Image} from 'grommet-icons'

// function that manage the dashboard left sidebar
export const LeftSidebar = props =>{
    const spanStyle = {
        display:(props.sideBar)?'inline-block':'none',
        fontSize:'12px!important',
        fontFamily:'arial',
        paddingLeft:'10px',
        width:'150px',
    }
    const sectionStyle = {
        display:'flex',
        flexDirection:'row',
        justifContent:'flex-start',
        alignItems:'center',
        borderTopRightRadius:'20px',
        borderBottomRightRadius:'20px',
        marginBottom:'1px'
    }

    const composeStyle = {
        display:'flex',
        flexDirection:'row',
        justifContent:'flex-start',
        alignItems:'center',
        margin:'10px',
        width:'140px',
        padding:"5px",
        boxShadow:"0px 0px 2px 2px #ddd",
        borderRadius:'25px'
    }
     return   (
            <Box className='sidebar-left' >
                <section  style={composeStyle}><Button icon={<FormAdd />} /> <span style={spanStyle} >Compose</span></section>
                <Box style={{borderBottom:'1px solid #eee',maxHeight:'300px'}} overflow={{vertical:'auto'}}>
                    <a  style={sectionStyle}><Button icon={<MailOption />} /> <span style={spanStyle}>Primary</span></a>
                    <a  style={sectionStyle}><Button icon={<Star/>} /> <span style={spanStyle}>Starred</span> <span>245</span> </a>
                    <a style={sectionStyle}><Button icon={<Star  />} /> <span style={spanStyle}>Snoozed</span></a>
                    <a style={sectionStyle}><Button icon={<Star/>} /> <span style={spanStyle}>Sent</span></a>
                    <a style={sectionStyle}><Button icon={<Star/>} /> <span style={spanStyle}>Drafts</span></a>
                    <a style={sectionStyle}><Button icon={<Star/>} /> <span style={spanStyle}>[lmap]/Trash</span></a>
                    <a style={sectionStyle}><Button icon={<Star/>} /> <span style={spanStyle}>All Mail</span></a>
                </Box>
                <Box>
                   <Box 
                        tag='section' 
                        direction='row' 
                        justify='start' 
                        align='center' 
                        margin='small' 
                        style={{borderBottom:'1px solid #eee'}}> 
                      <Button icon={<Image />} /> <span>Alade</span> <Button icon={<Add size='small' />} />
                     </Box>
                   <Box tag='section' direction='column'>
                        <div><Button icon={<Image />} /> <span>Barakalah</span></div>
                        <div><Button icon={<Image />} /> <span>Damilola</span></div>
                   </Box>
                </Box>
                
             </Box>
     );
}

// function that manage the dashboard right sidebar
export const RightSidebar = props =>{
    return (
        <Box border='small' >
            Rigth sidebar
        </Box>

    );
}
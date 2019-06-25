import React, {useState} from 'react'
import {Box, Button } from 'grommet'
import {FormAdd, Add} from 'grommet-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// function that manage the dashboard left sidebar
export const LeftSidebar = props =>{
    const [showLabel, setshowLabel] = useState(false)
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
        marginBottom:'1px',
        padding:'5px'
    }

    const composeStyle = {
        display:'flex',
        flexDirection:'row',
        justifContent:'flex-start',
        alignItems:'center',
        margin:'10px',
        padding:"5px",
        boxShadow:"0px 0px 2px 2px #ddd",
        borderRadius:'25px',
        minWidth:'35px',
        maxWidth:'130px'
    }

   
     return   (
            <Box className='sidebar-left' direction='column' justify='between'>
                <Box>
                <div  style={composeStyle}><Button icon={<FormAdd />} /> 
                 <span style={spanStyle} >Compose</span>
                </div>
                <Box tag='ul' style={{borderBottom:'1px solid #eee',height:'200px'}} overflow={{vertical:'auto'}}>
                    <li  style={sectionStyle} className='active'>
                        <FontAwesomeIcon icon={['fas','inbox']} style={{fontSize:'1.5em'}}/> <span style={spanStyle}>Inbox</span>
                    </li>
                    <li  style={sectionStyle}>
                        <FontAwesomeIcon icon={['fas','star']} style={{fontSize:'1.5em'}} /> 
                        <span style={spanStyle}>Starred</span> 
                        <span>245</span>
                    </li>
                    <li style={sectionStyle}>
                        <FontAwesomeIcon icon={['fas','clock']} style={{fontSize:'1.5em'}} /> <span style={spanStyle}>Snoozed</span>
                     </li>
                    <li style={sectionStyle}>
                        <FontAwesomeIcon icon={['fas','paper-plane']} style={{fontSize:'1.5em'}}  /> <span style={spanStyle}>Sent</span>
                     </li>
                    <li style={sectionStyle}>
                        <FontAwesomeIcon icon={['fas','file']} style={{fontSize:'1.5em'}}  /> <span style={spanStyle}>Drafts</span>
                    </li>
                    <li style={sectionStyle}>
                        <FontAwesomeIcon icon={['fas','tag']} style={{fontSize:'1.5em'}} /> <span style={spanStyle}>[lmap]/Trash</span>
                     </li>
                    <li style={sectionStyle} onClick={()=>{setshowLabel(!showLabel)}}>
                        <FontAwesomeIcon icon={['fas','angle-down']} /> <span style={spanStyle}> {(showLabel)?'less':'more'}</span>
                    </li>
                    { showLabel && (<li style={sectionStyle}>
                        <Button icon={<FontAwesomeIcon icon={['fas','info-circle']} style={{fontSize:'1.5em'}}/>} /> <span style={spanStyle}> Spam</span>
                    </li>) }
                    
                </Box>
                <Box>
                   <Box 
                        tag='section' 
                        direction='row' 
                        justify='between' 
                        align='center' 
                        margin='small' 
                        style={{borderBottom:'1px solid #eee'}}> 
                    <div>
                        <FontAwesomeIcon icon={['fas','user-circle']} size='2x'/> 
                        <span>Alade <FontAwesomeIcon icon={['fas','angle-down']} /> </span>
                    </div>
                    <Add size='small' />

                     </Box>
                   <Box tag='section' direction='column'>
                        <Box 
                            tag='div' 
                            direction='row' 
                            justify='between' 
                            align='center' 
                            margin={{'horizontal':'small'}} >
                        <div>
                        <FontAwesomeIcon icon={['fas','user-circle']} size='2x'/>
                            <span>User <FontAwesomeIcon icon={['fas','angle-down']} /> </span>
                        </div>
                        <Add size='small' />
                            </Box>
                        
                   </Box>
                </Box>
                </Box>
                <Box 
                    tag='div' 
                    direction='row'
                    justify='center'
                    align='center'
                    className='bottom'
                    border={{color:'#eee',side:'horizontal'}}>
                    <Button icon={<FontAwesomeIcon size='1x' icon={['fas','user']}  />}/>
                    <Button icon={<FontAwesomeIcon size='1x' icon={['fab','google']} />}/>
                </Box>
             </Box>
     );
}

// function that manage the dashboard right sidebar
export const RightSidebar = props =>{
    return (
        <Box border={{color:'#eee',side:'left'}} direction='column' justify='start' pad='10px' >
            <Box border={{color:'#eee',side:'bottom'}}>
                <Button icon={<FontAwesomeIcon icon={['fas', 'calendar'] } color='#162c5f' style={{paddingBottom:'30px',fontSize:'1.5em'}} /> }/>
                <Button icon={<FontAwesomeIcon icon={['fas', 'book'] } color='#f2c956' style={{paddingBottom:'30px',fontSize:'1.5em'}} /> }/>
                <Button icon={<FontAwesomeIcon icon={['fas', 'tasks'] } color='#162c5f' style={{paddingBottom:'30px',fontSize:'1.5em'}} /> }/>
            </Box>
            <Box  direction='column' justify='between' align='center' height='medium'>
            <Button icon={<Add size='small' />}  />
            <Button icon={<FontAwesomeIcon icon={['fas','angle-right']} size='small' />} />
            </Box>
        </Box>

    );
}
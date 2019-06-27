import React, { Component } from 'react'
import {Box, Button, CheckBox, Tabs, Tab} from 'grommet'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// function that manage the dashboard left sidebar
export default class Content extends Component{
    constructor(props){
        super(props)
        this.state = {checked:false}
    }
    render(){
        return (
        <Box flex width='medium'>
            <Box direction='row' justify='between' align='center'>
                <Box 
                    className="topbar"
                    direction='row'
                    justify = 'start'
                    align='center'
                    width='100px'

                    >
                    <Button icon={<FontAwesomeIcon color='#333333' icon={['fas', 'square']} style={{fontSize:'1.2em'}} />}  />
                    <Button icon={<FontAwesomeIcon color='#333333' icon={['fas', 'redo-alt']} style={{fontSize:'1.2em'}} />}  />
                    <Button icon={<FontAwesomeIcon color='#333333' icon={['fas', 'ellipsis-v']} style={{fontSize:'1.2em'}} />}  />
                    
                </Box>
                <Box 
                    className="topbar"
                    direction='row'
                    justify = 'start'
                    align='center'
                    width='small'

                    >
                        <span style={{fontSize:'11px'}}>1-50 to 6,900</span>

                    <Button icon={<FontAwesomeIcon color='#333333' icon={['fas', 'angle-left']} style={{fontSize:'1.2em'}} />}  />
                    <Button icon={<FontAwesomeIcon color='#333333' icon={['fas', 'angle-right']} style={{fontSize:'1.2em'}} />}  />
                    <Button icon={<FontAwesomeIcon color='#333333' icon={['fas', 'cog']} style={{fontSize:'1.2em'}} />}  />
                    
                </Box>
            </Box>
            <Box as='section' overflow={{vertical:'auto'}}>
                <Tabs className='mail-tab'>
                        <Tab title={<Box><FontAwesomeIcon icon={['fas','inbox']} /> <span>Primary</span></Box>} >
                            <Info content='Hello, Get your offer here today with just 50 naria only' description='Get 5% Discount' title='ZipRecruiter' time='31 Apr' />
                            <Info content='Hello, Get your offer here today with just 50 naria only' description='Get a job offer today' title='Andela' time='31 Dec' />
                            <Info content='Hello, Get your offer here today with just 50 naria only' description='Repair your laptop ' title='Sosamak' time='31 Jun' />
                            <Info content='Hello, Get your offer here today with just 50 naria only' description='Searching for job' title='Alic' time='3:12 pm' />
                        </Tab>
                        <Tab title={<Box><FontAwesomeIcon icon={['fas','user-friends']} /> <span>Social</span></Box>} >
                            <Info content='Hello, Get your offer here today with just 50 naria only' description='Get 5% Discount' title='ZipRecruiter' time='31 Apr' />
                            <Info content='Hello, Get your offer here today with just 50 naria only' description='Get a job offer today' title='Andela' time='31 Dec' />
                            
                        </Tab>
                        <Tab title={<Box><FontAwesomeIcon icon={['fas','tag']} /> <span>Promotions</span></Box>} >
                            <Empty />
                            
                        </Tab>
                        <Tab title={<Box><FontAwesomeIcon icon={['fas','info-circle']} /> <span>Update</span></Box>} >
                            <Info content='Hello, Get your offer here today with just 50 naria only' description='Get 5% Discount' title='ZipRecruiter' time='31 Apr' />
                            <Info content='Hello, Get your offer here today with just 50 naria only' description='Get a job offer today' title='Andela' time='31 Dec' />
                            
                        </Tab>
                        <Tab title={<Box><FontAwesomeIcon icon={['fas','comments']} /> <span>Forums</span></Box>} >
                            <Empty />
                        </Tab>
                        
                </Tabs>
                <Box
                    as='section'
                    direction='row'
                    justify='evenly'
                    align='center'
                    style={{marginTop:'5px'}}
                    className="copyright"
                    >
                    <span> &copy;2019 project by alic </span>
                    <span> Made with luv</span>
                    <span> For Educational Purpose</span>
                </Box>
                
            </Box >
        </Box>
        );
    }
}

const Empty = props =>{
    return (
        <Box as='div' className='Empty' direction='column' justify='center' align='center' pad='xlarge' >
                                <span className='notification'>Empty Box !</span>
                                <span className='notification'>Try Checking others For Your Mail.</span>
                            </Box>
    )
}
const Info = props =>{
    return (
        <Box 
            direction='row' 
            justify='start' 
            align='center' 
            className='list'
            pad='small'
            flex >

            <Box  as='div' className='list-title' direction='row' justify='start' basis='1/4' align='center' gap='small' > 
                <span className='box'></span>
                <FontAwesomeIcon color='#fba548' icon={['fas','star']} style={{fontSize:'1.4em'}} /> 
                <span className="title">{props.title}</span>
            </Box>
            <Box  as='div' className='list-description' direction='row' justify='around' basis='3/4' align='center'> 
                <span className='description'>{props.description}</span>
                <span className='content'> {props.content}</span>
            </Box>
            <Box  as='div' className='list-time' basis='1/4'> 
                <span>{props.time}</span>
            </Box>
            
        </Box> 
    )
}
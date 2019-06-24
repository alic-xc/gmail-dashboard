import React, { Component } from 'react'
import {Box, Button} from 'grommet'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// function that manage the dashboard left sidebar

export default class Content extends Component{
    constructor(props){
        super(props)
        this.state = {}
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
            <section>
                <section>
                    Tabs
                </section>
                <section>
                    <table>
                        <tbody>
                            <tr>
                                <td>checkbox</td>
                            </tr>
                        </tbody>
                    </table>
                    </section>
            </section>
        </Box>
        );
    }
}
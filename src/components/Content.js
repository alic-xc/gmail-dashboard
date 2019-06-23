import React, { Component } from 'react'
import {Box} from 'grommet'

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
                <div>
                    <button  />
                    <button />
                    <button />
                </div>
                <div>
                    <span></span>
                    <button />
                    <button />
                    <button />

                </div>
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
import React, { Component } from 'react'
import pic from "./Images/arrow.png"
import home from "./Images/home.png"
import tel from "./Images/tel.png"
import email from "./Images/email.png"
import "./style.css"


export default class Ready extends Component {
    render() {
        return (
            <div>
                <div id="block_container">
                    <div className='main'>
                        <div className='foto'></div>
                        <div className='Navik'></div>
                        <div className='Contact'>
                            <a className='PMain'>Contacts</a>
                            <a className='DataInfo'><img style={{ width: "30px", height: "30px", margin: "-3px 6px" }} src={home}></img>
                            {this.props.Town}</a>
                            <a className='DataInfo'><img style={{ width: "30px", height: "30px", margin: "-3px 6px" }} src={tel}></img>
                            {this.props.Tel}</a>
                            <a className='DataInfo'><img style={{ width: "30px", height: "30px", margin: "-4px 6px" }} src={email}></img>
                            {this.props.Email}</a>
                        </div>
                    </div>
                    <div className='main2'>
                        <a className='Name'>{this.props.Name}</a>
                        <a className='Robota'>{this.props.Robota}</a>
                        <div className='Options'>
                            <a className='PMain'>Education</a>
                            <a className='DataFill'>{this.props.Education}</a>
                            <a className='DataYear'>{this.props.EducationYear}</a>
                            <a className='DataInfo'>{this.props.EducationInfo}</a>
                            <a className='PMain'>Job</a>
                            <a className='DataFill'>{this.props.Job}</a>
                            <a className='DataYear'>{this.props.JobYear}</a>
                            <a className='DataInfo'>{this.props.JobInfo}</a>
                            <a className='PMain'>Experience</a>
                            <a className='DataInfo'><img style={{ width: "30px", height: "30px", margin: "-3px 6px" }} src={pic}></img>
                                {this.props.Experience}</a>
                            <a className='PMain'>About myself</a>
                            <a className='DataFill'>Birthday: {this.props.Birthday}</a>
                            <a className='DataInfo'> {this.props.About}</a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

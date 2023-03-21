import React, { Component } from 'react'
import "./styleInput.css"
import Ready from './Ready';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "Sergey Datkin",
            Robota: "C#,C++",
            Education: "Harvard University",
            EducationYear: "2004",
            EducationInfo: "Qualification: Engineer of automation and computer integrated technologies",
            Job: "Microsoft",
            JobYear: "2020",
            JobInfo: "Projects: implementation of innovative automated systems speed up customer service decision- making.",
            Experience: "4 years. Project manager (organization of development from scratch, from the search for executors",
            About: "y dummy text of the printing and typesetting industry. Lorem Ipsum has ",
            Birthday: "02/05/2000",
            Tel: "446556456",
            Email: "sobaka@gmail.com",
            Town: "New York"
        }
    }
    methodName = (event) => { 
        if (event.target.id == "Name")
        {
            this.setState({ Name: event.target.value })
        }
        else if (event.target.id == "Robota")
        {
            this.setState({ Robota: event.target.value })
        }
        else if (event.target.id == "Education") {
            this.setState({ Education: event.target.value })
        }
        else if (event.target.id == "EducationYear") {
            this.setState({ EducationYear: event.target.value })
        }
        else if (event.target.id == "EducationInfo") {
            this.setState({ EducationInfo: event.target.value })
        }
        else if (event.target.id == "Job") {
            this.setState({ Job: event.target.value })
        }
        else if (event.target.id == "JobYear") {
            this.setState({ JobYear: event.target.value })
        }
        else if (event.target.id == "JobInfo") {
            this.setState({ JobInfo: event.target.value })
        }
        else if (event.target.id == "Experience") {
            this.setState({ Experience: event.target.value })
        }
        else if (event.target.id == "About") {
            this.setState({ About: event.target.value })
        }
        else if (event.target.id == "Birthday") {
            this.setState({ Birthday: event.target.value })
        }
        else if (event.target.id == "Tel") {
            this.setState({ Tel: event.target.value })
        }
        else if (event.target.id == "Email") {
            this.setState({ Email: event.target.value })
        }
        else if (event.target.id == "Town") {
            this.setState({ Town: event.target.value })
        }
    }
    method1 = (event) => {
        event.preventDefault(); 
    }
    render() { 
        return (

            <div id="block_container">
                <div className='main'>
                    <div className='Data'>
                        <a>Enter Data</a>
                        <form onSubmit={this.method1}>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.Name} id="Name" onChange={this.methodName}
                                    placeholder="Name" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.Robota} id="Robota" onChange={this.methodName}
                                    placeholder="Work" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.Education} id="Education" onChange={this.methodName}
                                    placeholder="Education" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.EducationYear} id="EducationYear" onChange={this.methodName}
                                    placeholder="Education Year End" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.EducationInfo} id="EducationInfo" onChange={this.methodName}
                                    placeholder="Education Info" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.Job} id="Job" onChange={this.methodName}
                                    placeholder="Job" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.JobYear} id="JobYear" onChange={this.methodName}
                                    placeholder="Job Year" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.Experience} id="Experience" onChange={this.methodName}
                                    placeholder="Experience" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.About} id="About" onChange={this.methodName}
                                    placeholder="About" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.Birthday} id="Birthday" onChange={this.methodName}
                                    placeholder="Birthday" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.Tel} id="Tel" onChange={this.methodName}
                                    placeholder="Tel" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.Email} id="Email" onChange={this.methodName}
                                    placeholder="Email" />
                                <span class="focus-border-15"></span>
                            </div>
                            <div class="col-15">
                                <input class="textbox-15" type="text"
                                    value={this.state.Town} id="Town" onChange={this.methodName}
                                    placeholder="Town" />
                                <span class="focus-border-15"></span>
                            </div>
                        </form>
                    </div>
                </div>
               <div className='main2'>
                    <Ready
                        Name={this.state.Name}
                        Robota={this.state.Robota}
                        Education={this.state.Education}
                        EducationYear={this.state.EducationYear}
                        EducationInfo={this.state.EducationInfo}
                        Job={this.state.Job}
                        JobYear={this.state.JobYear}
                        JobInfo={this.state.JobInfo}
                        Experience={this.state.Experience}
                        About={this.state.About}
                        Birthday={this.state.Birthday}
                        Tel={this.state.Tel}
                        Email={this.state.Email}
                        Town={this.state.Town}
                    ></Ready>
               </div>
               
            </div>

        )
    }
}

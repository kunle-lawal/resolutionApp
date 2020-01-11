import React, {Component } from "react";

class Resolution extends Component {
    state = {
        locked:  false,
        editing: false,
        isPublic: false,
        value: "I want to be able to stop doing things that would not work for the WGBH system"
    }

    lockPost = (e) => {
        this.setState({
            locked: !this.state.locked
        })
    }

    togglePublicity = (e) => {
        this.setState({
            isPublic: !this.state.isPublic
        })
    }

    toggleEditor = (e) => {
        console.log(this.state.locked);
        if(this.state.locked) {return false} else {
            this.setState({
                editing: !this.state.editing
            })
        }
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
           <>
                <div className={"resolutions" + (this.state.editing ? " editing" : "")}>
                    <div className="resolution_box">
                        <div className="input">
                            <p className={this.state.editing ? "" : ""}>{this.state.value}</p>
                            <input type="text" onChange={this.onChange} className={(!this.state.editing ? "display_none" : "")} value={this.state.value}/>
                            <div onClick={this.toggleEditor} className={"close " + (this.state.locked ? "display_none" : "")}>
                                <i className={"fas fa-" + (this.state.editing ? "times" : "pen")}></i>
                            </div>
                        </div>
                        <div onClick={this.lockPost} id='1' className={"icon lock" + (this.state.editing ? " display_none" : "")}>
                            <i className={"fas fa-" + (this.state.locked ? "lock" : "unlock")}></i>
                        </div>
                        <div onClick={this.togglePublicity} className={"publicity icon" + (!this.state.editing ? " display_none" : "")}>
                            <i className={"fas fa-" + (this.state.isPublic ? "eye" : "eye-slash")}></i>
                        </div>
                    </div>
                </div>
           </>
        )
    }
}

export default Resolution

import React, { Component } from 'react'
import PublicResolutions from './PublicResolutions'

class Share extends Component {
    state = {
        navClosed: false
    }

    toggleNav = (e) => {
        this.setState({
            navClosed: !this.state.navClosed
        })
    }

    render() {
        return (
            <div className="navigation">
                <nav>
                    <div className={"hamburger " + (this.state.navClosed ? "" : "opened")} onClick={this.toggleNav}>
                        <div className="patty"></div>
                        <div className="patty"></div>
                        <div className="patty"></div>
                    </div>
                </nav>
               
                <div className={"fullNav " + (this.state.navClosed ? "" : "show")}>
                    <div className="username">
                        <h4>Hello <span> @wangopop</span></h4>
                    </div>
                    <div className="moreInfo">
                        <div className="quote">
                            <h1>"ITS 2020 THE YEAR WE GET S*** DONE"</h1>
                            <h4>- Me</h4>
                        </div>

                        <div className="publicResolutions">
                            <div className="forscroll">
                                <PublicResolutions />
                                <PublicResolutions />
                                <PublicResolutions />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}

export default Share


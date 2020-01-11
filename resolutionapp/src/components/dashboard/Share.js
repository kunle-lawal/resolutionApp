import React, { Component } from 'react'

class Share extends Component {
    state = {
        navClosed: true
    }

    toggleNav = (e) => {
        this.setState({
            navClosed: !this.state.navClosed
        })
    }

    render() {
        return (
            <div class="share">
                <div className={"share_button " + (this.state.navClosed ? "" : "opened")} onClick={this.toggleNav}>
                    <h4>share</h4>
                </div>

                <div className="shareIcons">
                    <div className="facebook icon">
                        <i class="fab fa-facebook-f"></i>
                    </div>

                    <div className="twitter icon">
                        <i class="fab fa-twitter"></i>
                    </div>

                    <div className="pinterest icon">
                        <i class="fab fa-pinterest-p"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Share


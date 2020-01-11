import React, { Component } from "react";
import Resolution from './Resolution'
import SortItems from './SortItems'
import Nav from './Nav'
import Share from './Share'

class Dashboard extends Component {
    state = {
        resolutions: [0, 1],
        addedResolutions: [],
        sortBy: "none"
    }

    addResolution = () => {
        let added = this.state.addedResolutions;
        added.push({
            //value
        })
        this.setState({
            addedResolutions: added
        })
    }

    setSortItem = (item) => {
        this.setState({
            sortBy: item
        })
    }

    render() {
        return (
            <div className="main_page">
                <Share/>
                <Nav/>
                <SortItems
                    setSortItem={this.setSortItem}
                />
                {this.state.resolutions.map(() => {
                    return (
                        <div className="resolutions_container">
                            <Resolution/>
                        </div>
                    )
                })}
                {this.state.addedResolutions.map(() => {
                    return (
                        <Resolution/>
                    )
                })}
                <div className="addResolution" onClick={this.addResolution}>
                    <i class="fas fa-plus"></i>
                </div>
            </div>
        )
    }
}

export default Dashboard
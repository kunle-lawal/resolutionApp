import React, { Component } from 'react'

class SortItems extends Component {
    state = {
        sortItem: 'locked'
    }

    pickSortItem = (e) => {
        let sortItem = this.state.sortItem === e.target.id ? "" : e.target.id;
        console.log(this.state.sortItem, e.target.id);
        this.setState({
            sortItem: sortItem
        })
        this.props.setSortItem(sortItem);
    }

    render() {
        return (
            <div className="sortItems">
                <div className={"locked item " + (this.state.sortItem == "locked" ? "highlited" : "")} id="locked" onClick={this.pickSortItem}>
                    <h4 id="locked">Locked</h4>
                </div>
                <div className={"unlocked item " + (this.state.sortItem == "unlocked" ? "highlited" : "")} id="unlocked" onClick={this.pickSortItem}>
                    <h4 id="unlocked">Unlocked</h4>
                </div>
                <div className={"visible item " + (this.state.sortItem == "visible" ? "highlited" : "")} id="visible" onClick={this.pickSortItem}>
                    <h4 id="visible">Visible</h4>
                </div>
            </div>
        )
    }
}

export default SortItems


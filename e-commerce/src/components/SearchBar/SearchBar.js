import React, {Component} from "react";
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        term:'Search Items'
    }

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    
    render () {
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit}>
                    <label><i className="fas fa-search"></i></label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                </form>
            </div>
        )
    }
    
}

export default SearchBar;
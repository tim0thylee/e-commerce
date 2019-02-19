import React, {Component} from "react";
import './SearchBar.css';

class SearchBar extends Component {

    onInputChange = (e) => {
        console.log(e.target.value)
    }
    
    render () {
        return (
            <div className="search-bar">
                <form>
                    <label><i className="fas fa-search"></i></label>
                    <input type="text" onChange={this.onInputChange}/>
                </form>
            </div>
        )
    }
    
}

export default SearchBar;
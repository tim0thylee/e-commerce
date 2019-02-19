import React, {Component} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./container.css";

class Container extends Component {
    state = {
        term: ''
    }

    render () {
        return (
            <div className="container">
                <div className="navbar">
                    <span className="fas fa-comment-dollar" style={{color: "white"}}></span>
                    <div className ="buy-bar">
                        <button >
                            <span className="fas fa-shopping-cart"></span>
                        </button>
                        <button>
                            <span className="fas fa-cash-register"></span>
                        </button>
                    </div>
                </div>
                <div className="product-grid">
                    <div className="title-line">
                        BodyBP Store
                    </div>
                    <div className="product-grid-body">
                        <SearchBar />
                        <div className="product-grid-cards">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;
import React, {Component} from "react";
import {connect} from 'react-redux';

import {onTermChange} from "../../actions"
import SearchBar from "../../components/SearchBar/SearchBar";
import ImageList from "../../components/ImageList/ImageList";
import "./container.css";

class Container extends Component {

    render () {
        console.log(this.props.images)
        return (
            <div className="container">
                <div className="navbar">
                    <span className="fas fa-image" style={{color: "white"}}></span>
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
                        Poster Store
                    </div>
                    <div className="product-grid-body">
                        <SearchBar onSubmit={this.props.onTermChange}/>
                        <ImageList images={this.props.images}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {images: state.images}
}
export default connect(mapStateToProps, {onTermChange})(Container);
import React, {Component} from "react";
import {connect} from 'react-redux';

import {onTermChange} from "../../actions"
import SearchBar from "../../components/SearchBar/SearchBar";
import ImageList from "../../components/ImageList/ImageList";
import Navbar from "../../components/Navbar/Navbar";
import "./Buypage.css";

class Container extends Component {
    render () {
        return (
            <div className="container">
                <Navbar/>
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
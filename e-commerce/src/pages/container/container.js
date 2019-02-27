import React, {Component} from "react";
import unsplash from "../../api/unsplash";
import SearchBar from "../../components/SearchBar/SearchBar";
import ImageList from "../../components/ImageList/ImageList";
import "./container.css";

class Container extends Component {

    state = {
        images: []
    }
   
    onTermChange = async (term) => {
       const response = await unsplash.get('/search/photos', {
            params:{query: term}
        })
        this.setState({images: response.data.results})
        console.log(this.state.images)
    }


    render () {
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
                        <SearchBar onSubmit={this.onTermChange}/>
                        <ImageList images={this.state.images}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;
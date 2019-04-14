import React from 'react';
import Axios from 'axios'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

    state = {images : []}

     onSearchSubmit = async (searchText)=>{
        const response = await Axios.get("https://api.unsplash.com/search/photos",{

        params : {
            query : searchText
        },
        headers: {
            Authorization: 'Client-ID a6d82d4643f9373c869b3efaf056b9cab23ad5e87d369784a7a4fc321332b52e'
        }
        });

        this.setState({images:response.data.results});
        
    }


    render(){
        return(
            <div className="container">
                <SearchBar onSubmit = {this.onSearchSubmit}/> 
                <div>Found {this.state.images.length} elements</div> 
                <div className="row">
                <ImageList images = {this.state.images}/>
                </div>
                
            </div>
                 
        )
    }
}


export default App;
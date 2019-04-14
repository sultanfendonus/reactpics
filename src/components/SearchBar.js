import React from 'react';

class SearchBar extends React.Component{

    state = {inputValue : ''};

   onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue);
   }

    render(){
        return(
            <div>
                <div className="form-group">
                <label htmlFor="searchBar">Search Here:</label>
                <form onSubmit={this.onFormSubmit}>
                <input 
                 type="text"
                 className="form-control" 
                 value= {this.state.inputValue}
                 id="searchBar" placeholder = "Type some Word..." 
                 onChange={e=>this.setState({inputValue : e.target.value})}/>
                </form>
                
                </div>
            </div>
            
        );
    }
}

export default SearchBar;

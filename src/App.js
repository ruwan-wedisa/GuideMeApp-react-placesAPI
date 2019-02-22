import React, { Component } from 'react';
import Search from './components/Search';
import ResultList from './components/ResultList';
import SavedList from './components/SavedList';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      results : {},
      saved :[]
    }
  }


  updateState(values){
    this.setState ({
      results : values
    })
  }

  saveList(name,id){
    
    const places = this.state.saved.concat([name]);
    this.setState({
      saved:places
    })
  }

  DeleteinSavedPlaces =(id) =>{
     console.log(this.state.saved)
     console.log(id.name)
    

    let savedPlaces = this.state.saved.filter(saved =>{
      return saved !== id.name
    })

    //console.log(id)
    this.setState({
      saved:savedPlaces
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Welcome to GuideMe.lk</h1>
      <div className="container">
        <div className = "row">
        <div className="col-md-8">
          {/* loading search component*/}
          <Search callUpdate={this.updateState.bind(this)}
                  
          
          />
          {/* loading ResultList component*/}
          <ResultList resultPlaces={this.state.results}
          savedLists = {this.saveList.bind(this)}

          
          />
          
          </div>
          <div className="col-md-4">
          {/* loading SavedList component*/}
          <SavedList 
            savedList = {this.state.saved}
            deletePlaceID={this.DeleteinSavedPlaces.bind(this)}
          />
          </div>
        </div>
        </div>
      </div>

    );
  }
}

export default App;

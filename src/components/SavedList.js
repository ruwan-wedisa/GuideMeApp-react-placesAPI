import React,{Component} from 'react';

class SavedList extends Component{

    render () {

            
      
            var SavedLists = this.props.savedList.map(name=>{
                
                return (
                  
                        <li key={name} className="list-group-item d-flex justify-content-between align-items-center">
                        
                        {name}
                      
                        </li>
                    
                   
                )
            }
            )
        
        return (
           
            <div className= "container">
            <legend>Saved Places</legend>
            {SavedLists}
            </div>
           
            
        )
    }
}

export default SavedList;
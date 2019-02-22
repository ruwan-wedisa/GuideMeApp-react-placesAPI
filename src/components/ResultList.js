import React,{Component} from 'react';

class ResultList extends Component{
    
    render () {
        //console.log(this.props)
        if(this.props.resultPlaces.results !== undefined ){
            var placeList = this.props.resultPlaces.results.map(name=>{
    
                return (
                  
                        <li key={name.id} className="list-group-item d-flex justify-content-between align-items-center">
                        
                        {name.name}
                        <button type="button" className="btn btn-success" onClick={()=>this.props.savedLists(name.name)}>Save</button>
                        </li>
                    
                   
                )
            }
            )
        }
        return (
            <div className ="container">
            <ul className="list-group">
            {placeList}
            </ul>
            
            </div>
            
        )
    }
}

export default ResultList;
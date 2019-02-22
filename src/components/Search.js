import React,{Component} from 'react';
import axios from 'axios';
class Search extends Component{

    getTypedText(e) {
        // API KEY PLACES SEARCH
        // AIzaSyCVv5_ogiA2el00Qc0MU_BkU9OF0J9hCuU
        e.preventDefault();
        const inputValue = this.refs.valueTyped.value;
        //console.log(inputValue);
        const update = this.props;

        axios.post('http://localhost:3001/getLocations', {
            city: inputValue
          })
          .then(function (response) {

            //console.log(response);
          
            update.callUpdate(response.data.data);
            
          })
          .catch(function   (error) {
            console.log(error);
        });
    }
    render () {
        return (
            <form>
            <fieldset>
            <legend>Legend</legend>
              <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                
                  <div className="col-md-8">
                    <input type="text" name="name" className="form-control" id="staticEmail" ref="valueTyped" />
                    </div>
                  <div className=  "col-md-2">
                    <button type="button" className="btn btn-success" onClick={this.getTypedText.bind(this)}>Search</button>
                  </div>
                
              </div>
            </fieldset>
          </form>
        )
    }

}

export default Search;
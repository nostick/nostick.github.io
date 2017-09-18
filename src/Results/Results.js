import React, { Component } from 'react';
import { Button, Table} from 'react-bootstrap';
import { fetchImages } from './ResultsActions';
import { connect } from "react-redux";

class Results extends Component {

  constructor(props){
      super(props);
    }

    componentWillMount(){
      this.props.dispatch(fetchImages());
    }

  render() {
    var photosElements = '';

    if(Object.keys(this.props.results).length > 0 ){
      var self = this;

      photosElements =
      <div>
      <Table striped bordered condensed hover>
         <thead>
           <tr>
             <th>Usuario</th>
             <th>Imagen</th>
           </tr>
         </thead>
         <tbody>
             {Object.keys(this.props.results).map((keyName, i) =>
               <tr key={i}>
                  <td>{this.props.results[keyName].name}</td>
                  <td><img id="image" src={this.props.results[keyName].picture_link} alt="unsplash1" width="50px" height="50px" className="center-block"/></td>
               </tr>
               )
             }
         </tbody>
       </Table>


      </div>
    }

    return (
      <div className="container">
        <div className="row">
          <h3 className="text-center">A continuacion se muestran las imagenes por usuario.</h3>
              {photosElements}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        results: state.results.results,
    }
}
export default connect(mapStateToProps)(Results);

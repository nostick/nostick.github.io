import React, { Component } from 'react';
import { Button, Col, Glyphicon} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { fetchImage1, fetchImage2 } from './ImagesActions';
import { connect } from "react-redux";
import fire from '../Firebase';

class Images extends Component {

  constructor(props){
      super(props);
      this.state = {
            redirect: false
          };
    }

    componentWillMount(){
      this.props.dispatch(fetchImage1());
      this.props.dispatch(fetchImage2());
    }

    handleClick(image) {
      /* Send the message to Firebase */
      var imageData = {
        name: localStorage.getItem('name'),
        picture_id: image.id,
        picture_link: image.urls.regular
      };

      var newImageKey = fire.database().ref().child('images').push().key;

      var updates = {};
      updates['/images/' + newImageKey] = imageData;

      fire.database().ref().update(updates);

      alert('Su imagen ha sido registrada');
      this.props.dispatch(fetchImage1());
      this.props.dispatch(fetchImage2());

    }




  render() {
    const { image1, image2 } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/images'/>;
    }

    var photosElements = '';
    if(image1 !== null && image2 !== null){
      photosElements =
      <div>
        <Col xs={6} md={6} mdPush={1}>
          <img id="image1" src={image1.urls.small} alt="unsplash1" width="300px" height="300px"/>
          <br/><br/>
          <Button bsStyle="primary" name="submitForm" type="button" style={{"margin-left":"100px"}} onClick={() => this.handleClick(image1)}>
            <Glyphicon glyph="thumbs-up" />  Me gusta
          </Button>
        </Col>
        <Col xs={6} md={6}>
          <img id="image2" src={image2.urls.small} alt="unsplash2" width="300px" height="300px"/>
          <br/><br/>
          <Button bsStyle="primary" name="submitForm" type="button" style={{"margin-left":"100px"}} onClick={() => this.handleClick(image2)}>
            <Glyphicon glyph="thumbs-up" />  Me gusta
          </Button>
        </Col>
      </div>
    }

    return (
      <div className="container">
        <div className="row">
          <h3>A continuacion se muestran un par de imagenes, por favor selecciona la que mas te guste.</h3>
              {photosElements}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        image1: state.images.image1,
        image2: state.images.image2
    }
}
export default connect(mapStateToProps)(Images);

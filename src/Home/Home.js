import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Col, Form} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Home extends Component {

  constructor(){
      super();
      this.state = {
            name: '',
            redirect: false
          };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this)
    }

    getInitialState() {
         return {
           name: '',
           redirect: false
         };
      }

    getValidationState() {
      const length = this.state.name.length;
      if (length > 3) return 'success';
      else if (length >10) return 'warning';
      else if (length > 0) return 'error';
    }

    handleChange(event) {
          const target = event.target;
          const name = target.name;

          this.setState({
              [name]: target.value
          });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.setState({
        redirect:true
      })
      localStorage.setItem('name', this.state.name);
    }

  render() {

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/images'/>;
    }

    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">Bienvenido al Test de Front End</h2>
          <Form name='firstForm' method="post" onSubmit={this.handleSubmit}>
            <Col xs={6} md={6} mdPush={3}>
            <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Tu nombre: &nbsp;</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Tu nombre"
                    onChange={this.handleChange}
                    name="name"
                  />
                    <FormControl.Feedback />
                  &nbsp;
            </FormGroup>
            <Button bsStyle="primary" name="submitForm" type="submit" className="center-block">Ingresar</Button>
              </Col>
          </Form>
        </div>
      </div>
    );
  }
}

export default Home;

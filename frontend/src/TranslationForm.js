import React from 'react';
import axios from 'axios';
import {FormControl,InputGroup,Button,Container,Row,Col,Alert,Form} from 'react-bootstrap';
import babyYoda from './img/babyyoda.png';
// import api from './utils/api.js'
// import './TranslationForm.css';

class TranslationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Proszę napisać wypracowanie o swoim ulubionym elemencie DOM',
      translatedText: 'Tutaj pojawi się przetłumaczony tekst'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  translate(toTranslate, from, to) {
    console.log(axios.defaults.port);
    axios.defaults.port = 8081;

    let result =
    axios.post('http://localhost:8081/translate', {
      port: 8081,
      text: toTranslate,
      from: from,
      to: to
    })
    .then(result => this.setState({
      translatedText: result.data.text,
    }))
    .catch(function (error) {
      console.log(error);
    });

    return result;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('Wysłano następujące wypracowanie: ' + this.state.value);
    console.log('Zapytanie' + this.state.value);
    this.translate(this.state.value, '', 'en');
    console.log('Text' + this.state.translatedText);

    event.preventDefault();
  }

  render() {
    return (
    <div className="translationForm">
      <Row className="justify-content-md-center formRow">
        <Col xs lg="5" className="formElement">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formTranslate">
                <Form.Label>Tekst do przetłumaczenia</Form.Label>
                  <InputGroup>
                    <FormControl as="textarea" aria-label="With textarea" onChange={this.handleChange}/>
                  </InputGroup>
                <Button type="submit" value="Wyślij" variant="dark" size="sm" >Tłumacz</Button>
            </Form.Group>
            </Form>
          </Col>
          <Col xs lg="5" className="formElement">
            <p> Przetłumaczony tekst:</p>
            <Alert variant="secondary"> {this.state.translatedText} </Alert>
          </Col>
        </Row>
    </div>

    );
  }
}
export default TranslationForm;

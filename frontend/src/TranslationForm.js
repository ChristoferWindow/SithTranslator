import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import api from './utils/api.js'
// import './TranslationForm.css';

class TranslationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Proszę napisać wypracowanie o swoim ulubionym elemencie DOM',
      translatedText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  translate(toTranslate, from, to){
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
    console.log(result);
    console.log('helo');

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
      <form onSubmit={this.handleSubmit}>
        <label>
          Tekst do przetłumaczenia:

          <InputGroup>
            <FormControl as="textarea" aria-label="With textarea" onChange={this.handleChange}/>
          </InputGroup>
          <p> Przetłumaczony tekst:</p>
          <p> {this.state.translatedText} </p>
        </label>
        <Button as="input" type="submit" value="Wyślij" variant="dark" onChange={this.handleChange}/>
      </form>
    );
  }
}
export default TranslationForm;

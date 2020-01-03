import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
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
        // return response
        // console.log( response);
      .then(function(response) {
        console.log(response.data)
        return response.data;
      })
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
    let translated = this.translate(this.state.value, '', 'en')

    this.setState({translatedText: translated.text});
    console.log('Text' + this.state.translatedText);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tekst do przetłumaczenia:
          <textarea value={this.state.value} onChange={this.handleChange} />
          <p> Przetłumaczony tekst: {this.state.translatedText} </p>
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    );
  }
}
export default TranslationForm;

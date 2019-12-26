import React from 'react';
import logo from './logo.svg';
import api from './utils/api.js'
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

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('Wysłano następujące wypracowanie: ' + this.state.value);
    console.log('Zapytanie' + this.state.value);
    api.translate(this.state.value, '', 'en')
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tekst do przetłumaczenia:
          <textarea value={this.state.value} onChange={this.handleChange} />
          <p> Przetłumaczony tekst: {this.props.translatedText} </p>
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    );
  }
}
export default TranslationForm;

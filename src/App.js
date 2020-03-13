import React, { Component } from 'react';
import { textToWhitespace } from './textToWhitespace'
import './App.css';

class Converter extends Component {
  constructor() {
    super()
    this.state = { outputId: 'whitespace' }
  }
  
  convertToWhiteSpace = (text) => {
    if (!text) {
      document.getElementById(this.state.outputId).innerText = ''
      return
    }
    const converted = textToWhitespace(text)
    console.log(converted)
    document.getElementById(this.state.outputId).innerText = converted + '\n\n'
  }

  render() {
    return (
      <section>
        <textarea onChange={(e) => this.convertToWhiteSpace(e.target.value)} placeholder='Enter your text here'>
        </textarea>
        <pre style={{border: 'solid 1px'}} id={this.state.outputId}>
        </pre>
      </section>
    );
  }
}

export default Converter;

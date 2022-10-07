import React from 'react';
import './css/style.css';
import AppViews, { splashscreen } from './views/AppViews';
import {renderDOM, renderView} from './views/render';
import reportWebVitals from './reportWebVitals';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'HomePage'
    }
  }

  componentDidMount() {
    splashscreen();
  }

  render() {
    return renderView(this, AppViews);
  }
}

renderDOM(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

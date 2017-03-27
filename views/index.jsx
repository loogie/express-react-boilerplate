import React from 'react';
import Button from './atoms/Button/index.js';

class Init extends React.Component {
  render(){
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
          <h1>Test</h1>
          <p>This is a test page <a href="#">TEST</a></p>
          <Button>Test Button</Button>
        </body>
      </html>
    );
  }
}

module.exports = Init;

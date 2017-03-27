import React from 'react';

class Error extends React.Component {
  render(){
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.message}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Error;

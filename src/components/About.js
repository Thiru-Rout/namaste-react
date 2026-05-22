import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is a React namaste dev</h2>
        <UserClass userInfo={{
          name: "Thiru",
          location: "Hyderabad",
          contact: "@thiru25"
        }} />
      </div>
    )
  }
}

export default About
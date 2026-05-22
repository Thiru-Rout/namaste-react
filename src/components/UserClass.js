import React from "react"; 

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Thiru-Rout");
    const json = await data.json();

    this.setState({
      userInfo: json,
    })
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact: @thiru25</h4>
      </div>
    );
  }
}

export default UserClass;
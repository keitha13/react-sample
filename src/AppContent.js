import React, { Component } from "react";

export default class AppContent extends Component {

  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
  }

  handlePostChange(posts) {
    this.posts.handlePostChange(posts);
  }

  fetchList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(json => {
      this.handlePostChange(json);
    })
  }

  clickedItem = (x) => {
    console.log("clicked", x)
  }

  render() {
    return (
      <div>
        This is content.
        <br />
        <hr />

        <p onMouseEnter={this.anotherFunction} onMouseLeave={this.leftParagraph}>this is some text</p>
        <button onClick={this.fetchList} className="btn btn-primary">fetch data</button>

        <hr />

        <p>posts is {this.props.posts.length} items length</p>

        <ul>
          {this.props.posts.map((c) => (
            <li key={c.id}>
              <a href="#!" onClick={() => this.clickedItem(c.id)}>
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
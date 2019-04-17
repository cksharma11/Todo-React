import React from "react";
import CreateTodo from "./createTodo";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [{ todo: "First Todo" }] };
    this.getTodo();
  }

  render() {
    return (
      <div>
        <CreateTodo />
        {this.state.todos
          .map(todo => {
            return (
              <div>
                <div>{todo.todo}</div>
              </div>
            );
          })
          .reverse()}
      </div>
    );
  }

  getTodo() {
    fetch("/todos")
      .then(res => res.json())
      .then(res => this.setState({ todos: res }));
  }
}

export default HomePage;

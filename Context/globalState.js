import React from "react";
import Context from "./context";
import { Text } from "react-native";

export default class globalState extends React.Component {
  state = {
    tasks: [],
  };

  search = () => {
    const api = `https://hn.algolia.com/api/v1/search?query=/`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ tasks: this.state.tasks.concat(data.hits) });
      });
  };

  add = (task) => {
    const list = [...this.state.tasks, task];
    this.setState({ tasks: list });
  };

  delete = (taskId) => {
    this.setState(this.state.tasks.splice(taskId, 1));
  };

  edit = (taskId) => {
    this.setState(this.state.tasks.splice(taskId, 1));
  }

  render() {
    return (
      <Context.Provider
        value={{
          tasks: this.state.tasks.map((topic) => (
            <Text key={topic.objectID}>{topic.title}</Text>
          )),
          search: this.search,
          add: this.add,
          delete: this.delete,
          edit: this.edit,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

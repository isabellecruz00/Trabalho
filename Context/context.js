import React from "react";

export default React.createContext({
  tasks: [],
  search: () => {},
  add: (task) => {},
  delete: (taskId) => {},
  edit: (taskId) => {},
});

import React from "react";

const CreateTodo = () => {
  return (
    <div>
      <form method="POST" action="addTodo">
        <input type="text" name="todo" />
        <input type="submit" value="add todo" />
      </form>
    </div>
  );
};

export default CreateTodo;

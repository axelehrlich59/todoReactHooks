import react from "react";


const DeleteAllTodo = ({
  deleteCheckedTodos,
}) => {
  return (
    <>
      <button onClick={deleteCheckedTodos} className="buttonDeleteTodos">Delete todos selectionned</button>
    </>
  );
}

export default DeleteAllTodo
import react from "react";


const DeleteAllTodo = ({
  deleteCheckedTodos,
}) => {
  return (
    <>
    <div className='containerButtonDeleteTodos'>
      <button onClick={deleteCheckedTodos} className="buttonDeleteTodos">Delete todos selectionned</button>
    </div>
    </>
  );
}

export default DeleteAllTodo
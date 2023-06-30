import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';
import { ChangeAlert } from '../ChangeAlert';
// import { WrappedComponentChange } from '../ChangeStorage';


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    setStateSincronized,
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </TodoHeader>
      
      <TodoList
        error = {error}
        loading = {loading}
        searchValue = {searchValue}
        searchedTodos = {searchedTodos}
        totalTodos = {totalTodos}
        onError = {()=><TodosError />}
        onLoading = {()=><TodosLoading />}
        onEmpty = {()=><EmptyTodos text={"¡Crea tu primer TODO!"}/>}
        onEmptySearchResults = {(value)=><EmptyTodos text={`No encontramos nada con la busqueda: ${value}`}/>}
        // renderItThis = {todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
        
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      <ChangeAlert sincronize={setStateSincronized}/>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo}
    setOpenModal={setOpenModal}/>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        loading={loading}
      />
    </React.Fragment>
  );
}

export default App;

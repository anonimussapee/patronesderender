import React from 'react';
import './TodoList.css'

function TodoList(props) {

  let renderThis = props.children || props.renderItThis

  return (
    <section>
       {props.error && props.onError()}
       {props.loading && props.onLoading()}
       {(!props.loading && !props.totalTodos ) && props.onEmpty()}
       {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}
       {!props.loading && !props.error && props.searchedTodos.map(renderThis)}      
     
    </section>
  );
}

export { TodoList };

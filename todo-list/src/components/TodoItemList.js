import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
 shouldComponentUpdate(nextProps, nextState) {
  return this.props.todos !== nextProps.todos;
 } // 최적화 => 리렌더링 해야 하는 경우를 지정(todos 값이 바뀔 때)

 render() {
   const { todos, onToggle, onRemove } = this.props;

   const todoList = todos.map(
    ({ id, text, checked }) => (
     <TodoItem
       id={ id }
       text={ text }
       checked={ checked }
       onToggle={ onToggle }
       onRemove={ onRemove }
       key={ id }
     />
    )
   );

   return (
     <div>
      { todoList }
     </div>
   );
 }
}

export default TodoItemList;
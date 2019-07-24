import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
 shouldComponentUpdate(nextProps, nextState) {
  return this.props.checked !== nextProps.checked;
 } // 최적화 => checked 값이 바뀔 때

 render() {
   const { text, checked, id, onToggle, onRemove } = this.props;

   console.log(id);

   return (
     <div className="todo-item" onClick={ () => onToggle(id) }>
       <div className="remove" onClick={ (e) => {
         e.stopPropagation(); // 이벤트의 확산을 멈춤(onTolggle 실행 막음)
         onRemove(id) }
       }>&times;</div>
       <div className={ `todo-text ${ checked && 'checked' }` }>
         <div>{ text }</div>
       </div>
       {
         checked && (<div className="check-mark">✓</div>)
       }
     </div>
   );
 }
}

export default TodoItem;
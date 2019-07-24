import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: '해야 할 일', checked: false },
      { id: 1, text: 'Todo-List', checked: true },
      { id: 2, text: '예제', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') { // 엔터 누르면 handleCreate() 호출(버튼클릭과 같은 동작)
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id); // id를 통해 몇 번째 아이템인지 찾음
    const selected = todos[index];

    const nextTodos = [...todos]; // 배열 복사

    // 기존 값 복사, checked 값 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id) // filter; 배열 내의 값을 지우는 함수
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={ input }
          onKeyPress={ handleKeyPress }
          onChange={ handleChange }
          onCreate={ handleCreate }
        />
      )}>
        <TodoItemList todos={ todos } onToggle={ handleToggle } onRemove={ handleRemove }/>
      </TodoListTemplate>
    );
  }
}

export default App;
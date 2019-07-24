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

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
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
        <TodoItemList todos={ todos }/>
      </TodoListTemplate>
    );
  }
}

export default App;
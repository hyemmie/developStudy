import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';
class App extends Component {
  id = 3;
  state = {
    selected: '#343a40',
    colors: [
      { color: '#343a40' },
      { color: '#f03e3e' },
      { color: '#12b886' },
      { color: '#228ae6' },
    ],
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false, color: '#343a40' },
      { id: 1, text: ' 리액트 소개', checked: true, color: '#343a40' },
      { id: 2, text: ' 리액트 소개', checked: false, color: '#343a40' },
    ],
  };
  handleChange = (e) => {
    console.log('change');
    this.setState({
      input: e.target.value,
    });
  };
  handleCreate = () => {
    console.log('create');
    const { selected, input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: selected,
      }),
    });
  };
  handleKeyPress = (e) => {
    console.log('keypress');
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };
  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };
    console.log('toggle');
    this.setState({
      todos: nextTodos,
    });
  };
  handleRemove = (id) => {
    const { todos } = this.state;
    console.log('remove');
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };
  handleSelect = (nextcolor) => {
    this.setState({
      selected: nextcolor,
    });
  };
  render() {
    const { selected, colors, input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleSelect } = this;
    console.log('app');
    return (
      <TodoListTemplate
        palette={
          <Palette
            colors={colors}
            selected={selected}
            onSelect={handleSelect}
          />
        }
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={selected}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={this.handleToggle}
          onRemove={this.handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;

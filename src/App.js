import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import Palette from "./components/Palette";
// import Calendar from "./components/Calendar";
import Calendar from "react-calendar";

const colors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: "",
    todos: [
      { id: 0, text: " 리액트 스터디 하기", checked: false, day: "9/10" },
      { id: 1, text: "리액트 훅 공부하기", checked: true, day: "9/10" },
      { id: 2, text: "집COR 청소 하기", checked: false, day: "9/10" },
    ],
    color: "black",
    date: "",
  };

  handleDate = (input) => {
    const year = input.getFullYear();
    const month = input.getMonth() + 1;
    const date = input.getDate();
    const fullday = ["일", "월", "화", "수", "목", "금", "토"];
    const day = fullday[input.getDay()];
    this.setState({ date: `${year}/${month}/${date}(${day})` });
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value, // input 의 다음 바뀔 값
    });
  };

  handleCreate = () => {
    const { input, todos, color, date } = this.state;
    this.setState({
      input: "", // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color,
        day: date,
      }),
    });
  };

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  handleColor = (color) => {
    this.setState({
      color,
    });
  };

  handleDay = (day) => {
    this.setState({
      day: day,
    });
  };

  // updateInput(key,value) {
  //   this.setState({[key]:value });
  // }

  render() {
    const { input, todos, color, day } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColor,
      handleDay,
    } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
            day={day}
          />
        }
        palette={
          <Palette colors={colors} selected={color} onSelect={handleColor} />
        }
        calendar={<Calendar onChange={this.handleDate} />}
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;

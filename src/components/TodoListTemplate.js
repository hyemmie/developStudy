import React from 'react';
import './TodoListTemplate.css';
import Calendar from './Calendar';

const TodoListTemplate = ({form, palette, children, calendar}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        To Do List
      </div>
      <section className="Calendar-wrapper">
        {calendar}
      </section>
      <section className="palette-wrapper">
        {palette}
      </section>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;
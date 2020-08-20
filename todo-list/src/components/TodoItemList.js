import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
	
	shouldComponentUpdate(nextProps, nextState) {
		// console.log(this.props.todos !== nextProps.todos)
		return this.props.todos !== nextProps.todos;
	}

	render() {
		const { todos, onToggle, onRemove, color } = this.props;
		const todoList = todos.map(
			({id, text, checked}) => (
				<TodoItem
					id={id}
					text={text}
					checked={checked}
					onToggle={onToggle}
					onRemove={onRemove}
					key={id}
					color={color}
				/>
			)
		)
		return (
			<div>
				{todoList}
			</div>
		)
	}
}

export default TodoItemList;
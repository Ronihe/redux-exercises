import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreate(newTodo) {
    this.props.dispatch({ type: 'ADD', payload: newTodo });
  }
  handleUpdate(id, updatedTask) {
    this.props.dispatch({ type: 'UPDATE', payload: { id, updatedTask } });
  }
  handleDelete(id) {
    this.props.dispatch({ type: 'DELETE', payload: id });
  }
  render() {
    const todos = this.props.todos.map(todo => {
      return (
        <Todo
          deleteTodo={() => this.handleDelete(todo.id)}
          key={todo.id}
          task={todo.task}
          updateTodo={updatedTask => this.handleUpdate(todo.id, updatedTask)}
        />
      );
    });
    return (
      <div>
        <NewTodoForm createTodo={this.handleCreate} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

const connectToState = connect(mapStateToProps);

export default connectToState(TodoList);

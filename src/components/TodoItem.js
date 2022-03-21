import React from "react";

class TodoItem extends React.Component {
  state = {
    editing: false,
  };
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };
  handleUpdatedDone = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
  };

  render() {
    const { completed, id, title } = this.props.todo;
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <div>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <li>
            <input
              type="checkbox"
              onChange={(e) => {
                e.preventDefault();
                this.props.handleChange(id);
              }}
              checked={completed}
            />
            <button onClick={() => this.props.deleteTodoProps(id)}>
              Delete
            </button>
            {title}
          </li>
        </div>
        <div style={editMode}>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              this.props.setUpdate(e.target.value, id);
            }}
            onKeyUp={this.handleUpdatedDone}
          />
        </div>
      </div>
    );
  }
}

export default TodoItem;

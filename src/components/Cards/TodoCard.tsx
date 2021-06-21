import React, { FunctionComponent } from "react";

interface TodoCardProps {
    todo: ITodoItem;
};

const TodoCard: FunctionComponent<TodoCardProps> = ({ todo }) => {

    return (
        <div>
            {todo.todo}
        </div>
    );
};

export default TodoCard;

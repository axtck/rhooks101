import React, { ChangeEvent, FunctionComponent, MouseEvent } from "react";
import { Button, Card, CardActions, CardContent, Checkbox, makeStyles, Typography } from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
interface TodoCardProps {
    todo: ITodoItem;
    onRemoveTodoClick: (e: MouseEvent<HTMLButtonElement>) => void;
    onCompletedToggle: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles({
    root: {
        maxWidth: 300
    },
    pos: {
        marginBottom: 6,
    }
});

const TodoCard: FunctionComponent<TodoCardProps> = ({ todo, onRemoveTodoClick, onCompletedToggle }) => {

    const { root, pos } = useStyles();
    const { todo: todoItem, completed } = todo;

    return (
        <Card className={root} variant="outlined">
            <CardContent>
                <div className="row">
                    <div className="col-8 mt-2">
                        <Typography className={pos} color="textSecondary">
                            {todoItem}
                        </Typography>
                    </div>
                    <div className="col-4 text-center">
                        <Checkbox
                            icon={<CheckCircleOutlineRoundedIcon />}
                            checkedIcon={<CheckCircleRoundedIcon />}
                            name="checkTodo"
                            style={{ color: "green" }}
                            checked={completed}
                            onChange={onCompletedToggle}
                        />
                    </div>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onRemoveTodoClick}>remove</Button>
            </CardActions>
        </Card>
    );

};

export default TodoCard;

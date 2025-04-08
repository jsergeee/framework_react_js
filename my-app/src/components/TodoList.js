import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Функция для добавления новой задачи
  const addTask = () => {
    if (task.trim()) {
      // Проверка, что задача не пустая
      setTodos([...todos, task]);
      setTask("");
    }
  };

  // Функция для удаления задачи
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Список задач
      </Typography>
      <TextField
        label="Введите задачу"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={addTask}>
        Добавить задачу
      </Button>
      <List sx={{ marginTop: 2 }}>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <Card variant="outlined" sx={{ width: "100%", marginTop: 1 }}>
              <CardContent>
                <ListItemText primary={todo} />
                <IconButton edge="end" onClick={() => deleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;

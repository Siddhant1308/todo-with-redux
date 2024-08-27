import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
  // Sample static list, replace with dynamic state
  const tasks = [
    { id: 1, name: 'Buy groceries' },
    { id: 2, name: 'Finish project report' },
    { id: 3, name: 'Call the bank' },
  ];

  const handleDeleteTask = (taskId) => {
    // Dispatch an action to delete the task (to be implemented with Redux)
    console.log('Deleting task:', taskId);
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
            <DeleteIcon />
          </IconButton>
        }>
          <ListItemText primary={task.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;

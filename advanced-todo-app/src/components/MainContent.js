import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, Checkbox, IconButton, Select, MenuItem } from '@mui/material';
import { StarBorder, Star, Delete, Shuffle, Notifications } from '@mui/icons-material';
import { addTask, toggleCompleteTask, toggleImportantTask, deleteTask, fetchCurrentDate } from '../redux/actions/taskActions';

const MainContent = () => {
  const dispatch = useDispatch();
  const { tasks, currentDate } = useSelector(state => state.task);

  const [taskInput, setTaskInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskInput,
        priority: priority,
        completed: false,
        important: false,
        date: dueDate || currentDate,
      };
      dispatch(addTask(newTask));
      setTaskInput('');
      setDueDate('');
    }
  };

  const handleToggleComplete = (taskId) => {
    dispatch(toggleCompleteTask(taskId));
  };

  const handleToggleImportant = (taskId) => {
    dispatch(toggleImportantTask(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Assuming fetchCurrentDate is called on component mount to set initial date
  React.useEffect(() => {
    dispatch(fetchCurrentDate());
  }, [dispatch]);

  const filteredTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Header with icons */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Typography variant="h4">To Do</Typography>
        <Box>
          <IconButton><Shuffle /></IconButton>
          <IconButton><Notifications /></IconButton>
        </Box>
      </Box>

      {/* Task Input Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
          label="Add A Task"
          variant="outlined"
          fullWidth
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          sx={{ marginRight: '10px' }}
        />
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          sx={{ marginRight: '10px' }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          sx={{ marginRight: '10px', width: '120px' }}
        >
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
        <Button variant="contained" style={{ backgroundColor: '#B0C4B1' }} onClick={handleAddTask}>
          ADD TASK
        </Button>
      </Box>

      {/* Pending Task List Section */}
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>Pending Tasks</Typography>
      <List>
        {filteredTasks.map((task) => (
          <ListItem key={task.id} sx={{ borderBottom: '1px solid #e0e0e0' }}>
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <ListItemText
              primary={
                <Typography style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.name}
                </Typography>
              }
              secondary={`Priority: ${task.priority} | Due: ${task.date}`}
            />
            <Select
              value={task.priority}
              onChange={(e) => setPriority(e.target.value)}
              sx={{ marginRight: '10px', width: '100px' }}
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
            <IconButton onClick={() => handleDeleteTask(task.id)}>
              <Delete />
            </IconButton>
            <IconButton onClick={() => handleToggleImportant(task.id)}>
              {task.important ? <Star style={{ color: '#FFD700' }} /> : <StarBorder />}
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Completed Task List Section */}
      <Typography variant="h6" sx={{ marginBottom: '10px', marginTop: '20px' }}>Completed</Typography>
      <List>
        {completedTasks.map((task) => (
          <ListItem key={task.id} sx={{ borderBottom: '1px solid #e0e0e0' }}>
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <ListItemText
              primary={
                <Typography style={{ textDecoration: 'line-through' }}>
                  {task.name}
                </Typography>
              }
              secondary={`Priority: ${task.priority} | Due: ${task.date}`}
            />
            <IconButton onClick={() => handleDeleteTask(task.id)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MainContent;

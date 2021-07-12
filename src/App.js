
import { useState } from 'react';
import './App.css';
import FormTask from './component/form-task/form-task';
import TaskList from './component/task-list/task-list';

function App() {

    const [data, setData] = useState([])

    const onSubmitTask = (task) => {
        setData([task, ...data])
    }

    const onFinish = (id) => {
        const task = data[data.findIndex(task => task.id === id)]
        task.isFinish = true
        const newData = data
        newData[data.findIndex(task => task.id === id)] = task
        setData([...newData])
    }

    const onDelete = (id) => {
        setData(data.filter(task => task.id !== id))
    }

    return (
        <div className="App">
            <h1>ToDo App</h1>

            <h2>Ajouter une tâche</h2>
            <FormTask onSubmitTask={onSubmitTask}/>
            <h2>Liste des tâches</h2>
            <TaskList data={data} onFinish={onFinish} onDelete={onDelete}/>
        </div>
    );
}

export default App;

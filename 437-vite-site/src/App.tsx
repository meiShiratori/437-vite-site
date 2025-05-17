import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Modal from './components/Modal';
import TodoItem from './components/TodoItem';
import { Task } from './types.ts';
import { nanoid } from 'nanoid';

const INITIAL_TASK_LIST: Task[] = [
  { id: nanoid(), name: 'Eat', completed: false },
  { id: nanoid(), name: 'Sleep', completed: false },
  { id: nanoid(), name: 'Repeat', completed: false },
];

function App() {
  const [taskList, setTaskList] = useState<Task[]>(INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function addTask(taskName: string) {
    const newTask: Task = {
      id: nanoid(),
      name: taskName,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
    setIsModalOpen(false);
  }

  function toggleTaskCompleted(id: string) {
    setTaskList(prev =>
      prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }

  function deleteTask(id: string) {
    setTaskList(prev => prev.filter(task => task.id !== id));
  }

  return (
    <main className="m-4 max-w-md mx-auto">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded mb-4"
      >
        Add Task
      </button>

      <section>
        <h1 className="text-xl font-bold mb-2">To do</h1>
        <ul className="space-y-2">
          {taskList.map(task => (
            <TodoItem
              key={task.id}
              task={task}
              onToggleCompleted={toggleTaskCompleted}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>

      <Modal
        isOpen={isModalOpen}
        onCloseRequested={() => setIsModalOpen(false)}
        headerLabel="Add Task"
      >
        <AddTaskForm onNewTask={addTask} />
      </Modal>
    </main>
  );
}

export default App;

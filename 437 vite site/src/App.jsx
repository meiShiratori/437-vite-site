import AddTaskForm from './components/AddTaskForm';
import TodoItem from './components/TodoItem';

const tasks = ['Eat', 'Sleep', 'Repeat'];

function App() {
  return (
    <main className="m-4 max-w-md mx-auto">
      <AddTaskForm />

      <section>
        <h1 className="text-xl font-bold mb-2">To do</h1>
        <ul className="space-y-2">
          {tasks.map((task, idx) => (
            <TodoItem key={idx} task={task} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;

import { useState } from 'react';

interface Props {
  onNewTask: (taskName: string) => void;
}

function AddTaskForm({ onNewTask }: Props) {
  const [input, setInput] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.trim() !== '') {
      onNewTask(input);
      setInput('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        placeholder="New task name"
        className="border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;

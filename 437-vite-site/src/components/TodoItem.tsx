import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../types';

interface Props {
  task: Task;
  onToggleCompleted: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoItem({ task, onToggleCompleted, onDelete }: Props) {
  return (
    <li className="flex justify-between items-center p-2 border rounded">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompleted(task.id)}
        />
        <span className={task.completed ? 'line-through text-gray-500' : ''}>
          {task.name}
        </span>
      </label>
      <button onClick={() => onDelete(task.id)} title="Delete task">
        <FontAwesomeIcon
          icon={faTrash}
          className="text-gray-500 hover:text-red-600"
        />
      </button>
    </li>
  );
}

export default TodoItem;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ task }) {
  return (
    <li className="flex justify-between items-center p-2">
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        {task}
      </label>
      <button title="Delete task">
        <FontAwesomeIcon icon={faTrash} className="text-gray-500 hover:text-red-600" />
      </button>
    </li>
  );
}

export default TodoItem;

function AddTaskForm() {
  return (
    <div className="mb-4 flex gap-2">
      <input
        placeholder="New task name"
        className="border rounded px-2 py-1 flex-1"
      />
      <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold px-4 py-1 rounded">
        Add task
      </button>
    </div>
  );
}

export default AddTaskForm;

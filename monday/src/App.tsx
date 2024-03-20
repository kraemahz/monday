import './App.css';
import TaskListView from './components/TaskListView';
import TaskCreateForm from './components/TaskCreateForm';
import TaskEditForm from './components/TaskEditForm';
import TaskDeleteConfirmation from './components/TaskDeleteConfirmation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskListView tasks={[]} />
        <TaskCreateForm />
        <TaskEditForm id="" initialTitle="" initialDescription="" onSave={() => {}} />
        <TaskDeleteConfirmation id="" onConfirm={() => {}} onCancel={() => {}} />
      </header>
    </div>
  );
}

export default App;

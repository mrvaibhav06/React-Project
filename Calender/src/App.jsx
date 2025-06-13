import Calendar from './components/Calendar';
import './App.css'
function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 flex-col">📅 React Calendar</h1>
      <Calendar />
    </div>
  );
}

export default App;

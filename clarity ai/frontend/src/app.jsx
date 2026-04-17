import { useEffect, useState } from "react";
import { getTasks, addTask, sendCommand, getPlan } from "./api";
import VoiceAssistant from "./components/VoiceAssistant";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [plan, setPlan] = useState([]);
  const [input, setInput] = useState("");
  const [ai, setAi] = useState("");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setTasks(await getTasks());
    setPlan(await getPlan());
  };

  const create = async () => {
    await addTask(input);
    setInput("");
    load();
  };

  const runAI = async () => {
    const res = await sendCommand(ai);
    alert(res.message);
    load();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Clarity AI</h1>

      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={create}>Add Task</button>

      <h2>Tasks</h2>
      {tasks.map(t => <p key={t._id}>{t.title}</p>)}

      <h2>Planner</h2>
      {plan.map((p, i) => (
        <p key={i}>{p.time} - {p.task}</p>
      ))}

      <h2>AI</h2>
      <input value={ai} onChange={e => setAi(e.target.value)} />
      <button onClick={runAI}>Run</button>
    </div>
  );
}

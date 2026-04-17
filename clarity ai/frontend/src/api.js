import axios from "axios";

const API = "http://localhost:5000";

export const getTasks = () =>
  axios.get(`${API}/api/tasks`).then(r => r.data);

export const addTask = (title) =>
  axios.post(`${API}/api/tasks`, { title });

export const sendCommand = (text) =>
  axios.post(`${API}/api/ai/command`, { text }).then(r => r.data);

export const getPlan = () =>
  axios.get(`${API}/api/planner`).then(r => r.data);
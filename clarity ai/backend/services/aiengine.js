const Task = require("../models/Task");
const Diary = require("../models/diary");

async function processCommand(text) {
  text = text.toLowerCase();

  // TASK
  if (text.includes("task") || text.includes("add")) {
    const title = text.replace("add", "").replace("task", "").trim();

    const task = new Task({ title });
    await task.save();

    return { message: `Task added: ${title}` };
  }

  // DIARY
  if (text.includes("diary")) {
    const entry = text.replace("diary", "").trim();

    const diary = new Diary({ text: entry });
    await diary.save();

    return { message: "Diary saved ✍️" };
  }

  // LIST TASKS
  if (text.includes("what") || text.includes("tasks")) {
    const tasks = await Task.find();

    return {
      message: tasks.map(t => t.title).join(", ")
    };
  }

  return { message: "I didn't understand that." };
}

module.exports = { processCommand };
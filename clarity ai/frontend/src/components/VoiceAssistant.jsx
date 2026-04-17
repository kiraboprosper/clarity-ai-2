import { useState, useEffect } from "react";
import { sendCommand } from "../api";

export default function VoiceAssistant() {
  const [listening, setListening] = useState(false);
  const [text, setText] = useState("");

  let recognition;

  if ("webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
  }

  const startListening = () => {
    if (!recognition) return alert("Voice not supported");

    setListening(true);

    recognition.start();

    recognition.onresult = async (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setText(transcript);

      // 🔥 AI command
      const res = await sendCommand(transcript);
      speak(res.message);
    };
  };

  const stopListening = () => {
    recognition.stop();
    setListening(false);
  };

  const speak = (message) => {
    const speech = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>🎙 Voice Assistant</h3>

      <button onClick={startListening}>
        {listening ? "Listening..." : "Start Voice"}
      </button>

      <button onClick={stopListening}>Stop</button>

      <p>{text}</p>
    </div>
  );
}

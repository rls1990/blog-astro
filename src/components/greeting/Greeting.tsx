import { useState } from "react";

interface GreetingProps {
  messages: string[];
}

const Greeting: React.FC<GreetingProps> = ({ messages }) => {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button
        className="bg-slate-500 p-3 mt-3 rounded-lg drop-shadow border-gray-200 border-2 hover:drop-shadow-xl transition-all text-white"
        onClick={() => setGreeting(randomMessage())}
      >
        Nuevo saludo
      </button>
    </div>
  );
};

export default Greeting;

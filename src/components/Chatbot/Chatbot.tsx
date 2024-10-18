import React, { useState, useEffect, useRef } from 'react';
import { ChatbotContainer } from './styles'; // Ensure this points to your styled component
import { IoChatbubbleOutline, IoSend } from 'react-icons/io5';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleString());
  const lastMessageRef = useRef<HTMLDivElement>(null); // Ref to track the last message element

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll to the last message every time messages are updated
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // Run effect whenever the messages array changes

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate a bot response
    setTimeout(() => {
      const botMessage: Message = { sender: 'bot', text: getBotResponse(input) };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const getBotResponse = (input: string) => {
    const userInput = input.toLowerCase();

    const responses: Record<string, string[]> = {
      hello: ['Hi there! How can I assist you today?', 'Hello! What can I help you with?', 'Hey! What’s on your mind?'],
      hi: ['Hello! How can I help you today?', 'Hi there! What do you need assistance with?'],
      portfolio: ['You can find my projects in the Projects section!', 'Check out my work in the Projects area!'],
      contact: ['You can contact me via the contact form or email in the contact section!', 'Feel free to reach out through the contact page!'],
      resume: ['You can download my resume from the header section using the "Get Resume" button.', 'My resume is available in the header section under "Get Resume"!'],
      skills: ['I am skilled in JavaScript, TypeScript, React, Node.js, and more!', 'I have expertise in various technologies including JavaScript and React.'],
      'tech stack': ['I primarily use JavaScript, TypeScript, React, Node.js, and Express for my projects.', 'My tech stack includes React, Node.js, and various other technologies.'],
      github: ['You can view my projects on GitHub at [Your GitHub Link]!', 'Check out my GitHub profile for more projects and contributions.'],
      help: ['Sure! What do you need help with?', 'I’m here to help! What would you like to know?'],
      'most proficient': ['I am most proficient in JavaScript, React, and Node.js. What would you like to know more about?'],
      availability: ['I am available to talk anytime after 1:30 PM EST, except for Wednesdays. Please send me a text or email before trying to call to let me know who you are. You can reach me at +17023666004 or thompsondeveloper@yahoo.com.'],
      'when are you available': ['I am available to talk anytime after 1:30 PM EST, except for Wednesdays. Please send me a text or email before trying to call to let me know who you are. You can reach me at +17023666004 or thompsondeveloper@yahoo.com.'],
      'when could I talk to you': ['I am available to talk anytime after 1:30 PM EST, except for Wednesdays. Please send me a text or email before trying to call to let me know who you are. You can reach me at +17023666004 or thompsondeveloper@yahoo.com.'],
    };

    for (const key in responses) {
      if (userInput.includes(key)) {
        const randomResponse = responses[key][Math.floor(Math.random() * responses[key].length)];
        return randomResponse;
      }
    }

    return "I'm sorry, I didn't understand that. You can reach me at +17023666004 or thompsondeveloper@yahoo.com for further assistance.";
  };

  return (
    <ChatbotContainer>
      <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
        <IoChatbubbleOutline />
      </div>
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-top">
            <img src="/Images/me.png" alt="Profile" className="profile-image" />
            <span className="current-time">{currentTime}</span>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            {/* Dummy div for scrolling to the bottom */}
            <div ref={lastMessageRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;

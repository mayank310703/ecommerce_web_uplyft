import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = { text: userInput, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    // Check if the input is a normal query or a search query
    if (['hi', 'hello', 'thanks'].some(keyword => userInput.toLowerCase().includes(keyword))) {
      try {
        const response = await axios.get('http://localhost:5000/api/chat', {
          params: { query: userInput },
        });

        const botMessages = [
          { text: response.data.response, sender: 'bot' },
        ];
        setMessages((prev) => [...prev, ...botMessages]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { text: 'An error occurred. Please try again.', sender: 'bot' },
        ]);
      }
    } else {
      // Handle product search
      try {
        const response = await axios.get('http://localhost:5000/api/search', {
          params: { query: userInput },
        });

        const products = response.data.products;
        if (products.length > 0) {
          const botMessages = [
            { text: 'Here are some products I found:', sender: 'bot' },
            ...products.map((p) => ({
              text: `${p.name} - $${p.price}`,
              sender: 'bot',
            })),
          ];
          setMessages((prev) => [...prev, ...botMessages]);
        } else {
          setMessages((prev) => [
            ...prev,
            { text: 'No products found for your search.', sender: 'bot' },
          ]);
        }
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { text: 'An error occurred. Please try again.', sender: 'bot' },
        ]);
      }
    }

    setUserInput('');
  };

  return (
    <>
      {/* Circle Logo Button */}
      <div className="chatbot-circle" onClick={toggleChatbot}>
        <span className="chatbot-icon">💬</span>
      </div>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-header">
            <span>Product Assistant</span>
            <button onClick={toggleChatbot} className="close-btn">×</button>
          </div>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="chat-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about products..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;

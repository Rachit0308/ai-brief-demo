import React, { useState, useRef, useEffect } from 'react';
import { Box, Paper, TextField, Button, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { useProjectStore } from '../store/projectStore';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const INITIAL_QUESTIONS = [
  "What type of project are you looking to build? (e.g., Web Application, Mobile App, E-commerce, etc.)",
  "What is your expected timeline for this project?",
  "What is your budget range for this project?",
  "How many team members do you think you'll need?",
  "What are the key features or functionalities you want to include? (comma-separated)",
  "Do you have any specific technical requirements or preferences? (comma-separated)",
  "What is your target audience or market for this project?",
  "Do you have any existing systems or platforms that need to be integrated?",
  "What are your main goals or success metrics for this project?",
  "Are there any specific security or compliance requirements?"
];

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. I'll help you create a detailed project brief. Let's start by understanding your project requirements.",
      sender: 'ai',
      timestamp: new Date(),
    },
    {
      id: 2,
      text: INITIAL_QUESTIONS[0],
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const updateProjectInfo = useProjectStore((state) => state.updateProjectInfo);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    inputRef.current?.focus();
  }, [messages]);

  const generateAIResponse = (userInput: string): string => {
    // Store the user's response in projectInfo
    switch (currentQuestionIndex) {
      case 0:
        updateProjectInfo('projectType', userInput);
        break;
      case 1:
        updateProjectInfo('timeline', userInput);
        break;
      case 2:
        updateProjectInfo('budget', userInput);
        break;
      case 3:
        updateProjectInfo('teamSize', userInput);
        break;
      case 4:
        updateProjectInfo('keyFeatures', userInput.split(',').map(feature => feature.trim()));
        break;
      case 5:
        updateProjectInfo('technicalRequirements', userInput.split(',').map(req => req.trim()));
        break;
      case 6:
        updateProjectInfo('targetAudience', userInput);
        break;
      case 7:
        updateProjectInfo('existingSystems', userInput);
        break;
      case 8:
        updateProjectInfo('successMetrics', userInput);
        break;
      case 9:
        updateProjectInfo('securityRequirements', userInput);
        break;
    }

    // Generate contextual follow-up questions
    if (currentQuestionIndex < INITIAL_QUESTIONS.length - 1) {
      return INITIAL_QUESTIONS[currentQuestionIndex + 1];
    } else {
      return "Thank you for providing all the information! I'll now generate a comprehensive project brief based on your requirements.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      setCurrentQuestionIndex(prev => prev + 1);

      // Navigate to brief preview after all questions are answered
      if (currentQuestionIndex >= INITIAL_QUESTIONS.length - 1) {
        setTimeout(() => {
          navigate('/brief');
        }, 2000);
      }
    }, 1000);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', height: 'calc(100vh - 200px)' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 2, 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        <Box sx={{ flexGrow: 1, overflow: 'auto', mb: 2 }}>
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 2,
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  maxWidth: '70%',
                  backgroundColor: message.sender === 'user' ? 'primary.light' : 'grey.100',
                  color: message.sender === 'user' ? 'white' : 'text.primary',
                }}
              >
                <Typography>{message.text}</Typography>
              </Paper>
            </Box>
          ))}
          {isLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
              <CircularProgress size={20} />
            </Box>
          )}
          <div ref={messagesEndRef} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
            inputRef={inputRef}
            autoFocus
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSend}
            disabled={isLoading}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatInterface; 
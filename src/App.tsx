import React from 'react';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { Auth } from './components/Auth';
import { useMessages } from './hooks/useMessages';
import { useAuth } from './hooks/useAuth';
import { LogOut } from 'lucide-react';

function App() {
  const { currentUser, login, register, logout } = useAuth();
  const { messages, addMessage } = useMessages();

  const handleSendMessage = (content: string) => {
    if (currentUser) {
      addMessage(content, currentUser);
    }
  };

  if (!currentUser) {
    return <Auth onLogin={login} onRegister={register} />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <div className="flex-none p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">p1ne app</h1>
          <div className="flex items-center gap-3">
            <img
              src={currentUser.avatar}
              alt={currentUser.username}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-white">{currentUser.username}</span>
            <button
              onClick={logout}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              title="Logout"
            >
              <LogOut size={20} className="text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <MessageList messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
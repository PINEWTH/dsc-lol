export interface Message {
  id: string;
  content: string;
  username: string;
  timestamp: Date;
  avatar: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}
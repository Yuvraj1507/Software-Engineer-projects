export interface User {
  id: string;
  email: string;
  name: string;
  profileImage?: string;
}

export interface AuthToken {
  token: string;
  expiresAt: Date;
}
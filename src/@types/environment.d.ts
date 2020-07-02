declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      NODE_ENV: 'development' | 'test' | 'production';
      MORGAN?: string;
    }
  }
}

export {};

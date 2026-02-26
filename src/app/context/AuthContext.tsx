import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  avatar?: string;
  enrolledCourses: string[];
  completedLessons: string[];
  createdCourses?: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'student' | 'teacher') => Promise<void>;
  signup: (name: string, email: string, password: string, role: 'student' | 'teacher') => Promise<void>;
  logout: () => void;
  enrollInCourse: (courseId: string) => void;
  completeLesson: (lessonId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem('edubridge_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string, role: 'student' | 'teacher') => {
    // Mock login - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      role,
      enrolledCourses: role === 'student' ? ['1'] : [],
      completedLessons: [],
      createdCourses: role === 'teacher' ? ['1', '2'] : [],
    };
    
    setUser(mockUser);
    localStorage.setItem('edubridge_user', JSON.stringify(mockUser));
  };

  const signup = async (name: string, email: string, password: string, role: 'student' | 'teacher') => {
    // Mock signup - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role,
      enrolledCourses: [],
      completedLessons: [],
      createdCourses: role === 'teacher' ? [] : undefined,
    };
    
    setUser(mockUser);
    localStorage.setItem('edubridge_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edubridge_user');
  };

  const enrollInCourse = (courseId: string) => {
    if (user && !user.enrolledCourses.includes(courseId)) {
      const updatedUser = {
        ...user,
        enrolledCourses: [...user.enrolledCourses, courseId],
      };
      setUser(updatedUser);
      localStorage.setItem('edubridge_user', JSON.stringify(updatedUser));
    }
  };

  const completeLesson = (lessonId: string) => {
    if (user && !user.completedLessons.includes(lessonId)) {
      const updatedUser = {
        ...user,
        completedLessons: [...user.completedLessons, lessonId],
      };
      setUser(updatedUser);
      localStorage.setItem('edubridge_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, enrollInCourse, completeLesson }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { BookOpen, LogOut, User, Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-green-600 text-white rounded-lg p-2">
              <BookOpen className="size-6" />
            </div>
            <span className="font-bold text-xl text-gray-900">EduBridge Africa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-green-600">
                  Dashboard
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-green-600 flex items-center gap-2">
                  <User className="size-4" />
                  {user.name}
                  {user.role === 'teacher' && (
                    <Badge variant="secondary" className="ml-1">Teacher</Badge>
                  )}
                </Link>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  <LogOut className="size-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="size-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {user ? (
              <div className="flex flex-col gap-4">
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-green-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-green-600 py-2 flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="size-4" />
                  {user.name}
                  {user.role === 'teacher' && (
                    <Badge variant="secondary">Teacher</Badge>
                  )}
                </Link>
                <Button onClick={handleLogout} variant="outline" className="w-full">
                  <LogOut className="size-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
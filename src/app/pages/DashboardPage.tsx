import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { TeacherDashboard } from './TeacherDashboard';
import { courses } from '../data/courses';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { BookOpen, Clock, Users, TrendingUp } from 'lucide-react';

export function DashboardPage() {
  const { user, enrollInCourse } = useAuth();
  const navigate = useNavigate();

  // If user is a teacher, show teacher dashboard
  if (user?.role === 'teacher') {
    return <TeacherDashboard />;
  }

  // Otherwise show student dashboard
  const enrolledCourses = user
    ? courses.filter(course => user.enrolledCourses.includes(course.id))
    : [];

  const availableCourses = user
    ? courses.filter(course => !user.enrolledCourses.includes(course.id))
    : courses;

  const getCourseProgress = (courseId: string) => {
    if (!user) return 0;
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    
    const completedLessons = course.lessons.filter(lesson =>
      user.completedLessons.includes(lesson.id)
    ).length;
    
    return Math.round((completedLessons / course.lessons.length) * 100);
  };

  const handleEnroll = (courseId: string) => {
    enrollInCourse(courseId);
  };

  const handleViewCourse = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl mb-2">
            Welcome back, {user?.name || 'Learner'}! 👋
          </h1>
          <p className="text-gray-600">
            Continue your learning journey or explore new courses
          </p>
        </div>

        {/* Stats */}
        {user && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-700 rounded-lg p-2">
                    <BookOpen className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{user.enrolledCourses.length}</div>
                    <div className="text-sm text-gray-600">Enrolled</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-700 rounded-lg p-2">
                    <TrendingUp className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{user.completedLessons.length}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 text-purple-700 rounded-lg p-2">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      {enrolledCourses.reduce((acc, course) => acc + course.lessons.length, 0) - user.completedLessons.length}
                    </div>
                    <div className="text-sm text-gray-600">In Progress</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 text-orange-700 rounded-lg p-2">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5K+</div>
                    <div className="text-sm text-gray-600">Community</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* My Courses */}
        {user && enrolledCourses.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl mb-4">My Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map(course => {
                const progress = getCourseProgress(course.id);
                return (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={
                          course.level === 'Beginner' ? 'secondary' :
                          course.level === 'Intermediate' ? 'default' : 'destructive'
                        }>
                          {course.level}
                        </Badge>
                        <span className="text-sm text-gray-500">{course.duration}</span>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <BookOpen className="size-4" />
                            {course.lessons.length} lessons
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="size-4" />
                            {course.students.toLocaleString()}
                          </div>
                        </div>

                        <Button
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => handleViewCourse(course.id)}
                        >
                          Continue Learning
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Available Courses */}
        <div>
          <h2 className="text-2xl mb-4">
            {user && enrolledCourses.length > 0 ? 'Explore More Courses' : 'Available Courses'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map(course => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={
                      course.level === 'Beginner' ? 'secondary' :
                      course.level === 'Intermediate' ? 'default' : 'destructive'
                    }>
                      {course.level}
                    </Badge>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <BookOpen className="size-4" />
                        {course.lessons.length} lessons
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="size-4" />
                        {course.students.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Category</div>
                      <div className="font-medium">{course.category}</div>
                    </div>

                    {user ? (
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => handleEnroll(course.id)}
                      >
                        Enroll Now
                      </Button>
                    ) : (
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => navigate('/signup')}
                      >
                        Sign Up to Enroll
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
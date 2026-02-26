import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { courses } from '../data/courses';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';
import { Mail, BookOpen, Award, TrendingUp, Edit } from 'lucide-react';

export function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const enrolledCourses = courses.filter(course => 
    user.enrolledCourses.includes(course.id)
  );

  const getCourseProgress = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    
    const completedLessons = course.lessons.filter(lesson =>
      user.completedLessons.includes(lesson.id)
    ).length;
    
    return Math.round((completedLessons / course.lessons.length) * 100);
  };

  const totalLessons = enrolledCourses.reduce((acc, course) => 
    acc + course.lessons.length, 0
  );

  const averageProgress = enrolledCourses.length > 0
    ? Math.round(
        enrolledCourses.reduce((acc, course) => 
          acc + getCourseProgress(course.id), 0
        ) / enrolledCourses.length
      )
    : 0;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <Avatar className="size-24 bg-green-600 text-white">
                <AvatarFallback className="text-2xl bg-green-600 text-white">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h1 className="text-3xl mb-2">{user.name}</h1>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Mail className="size-4" />
                  {user.email}
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 text-green-700 rounded-full p-2">
                      <BookOpen className="size-4" />
                    </div>
                    <div>
                      <div className="font-medium">{user.enrolledCourses.length}</div>
                      <div className="text-gray-600">Courses Enrolled</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                      <Award className="size-4" />
                    </div>
                    <div>
                      <div className="font-medium">{user.completedLessons.length}</div>
                      <div className="text-gray-600">Lessons Completed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-purple-100 text-purple-700 rounded-full p-2">
                      <TrendingUp className="size-4" />
                    </div>
                    <div>
                      <div className="font-medium">{averageProgress}%</div>
                      <div className="text-gray-600">Average Progress</div>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full md:w-auto">
                <Edit className="size-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Learning Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            {enrolledCourses.length > 0 ? (
              <div className="space-y-6">
                {enrolledCourses.map(course => {
                  const progress = getCourseProgress(course.id);
                  const completedCount = course.lessons.filter(lesson =>
                    user.completedLessons.includes(lesson.id)
                  ).length;

                  return (
                    <div key={course.id} className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{course.title}</h3>
                          <p className="text-sm text-gray-600">
                            {completedCount} of {course.lessons.length} lessons completed
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/course/${course.id}`)}
                        >
                          Continue
                        </Button>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-600">
                <BookOpen className="size-12 mx-auto mb-3 text-gray-400" />
                <p className="mb-4">You haven't enrolled in any courses yet</p>
                <Button
                  onClick={() => navigate('/dashboard')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Browse Courses
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-medium text-sm">Getting Started</div>
                <div className="text-xs text-gray-600 mt-1">
                  {user.enrolledCourses.length > 0 ? 'Unlocked!' : 'Enroll in a course'}
                </div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">📚</div>
                <div className="font-medium text-sm">First Lesson</div>
                <div className="text-xs text-gray-600 mt-1">
                  {user.completedLessons.length > 0 ? 'Unlocked!' : 'Complete 1 lesson'}
                </div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">⭐</div>
                <div className="font-medium text-sm">Dedicated Learner</div>
                <div className="text-xs text-gray-600 mt-1">
                  {user.completedLessons.length >= 5 ? 'Unlocked!' : 'Complete 5 lessons'}
                </div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-medium text-sm">Course Master</div>
                <div className="text-xs text-gray-600 mt-1">
                  {enrolledCourses.some(c => getCourseProgress(c.id) === 100) 
                    ? 'Unlocked!' 
                    : 'Complete a course'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

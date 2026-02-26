import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { courses } from '../data/courses';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { BookOpen, Users, TrendingUp, Plus, Edit, Eye } from 'lucide-react';

export function TeacherDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // In a real app, this would filter by teacherId
  const myCourses = user?.createdCourses
    ? courses.filter(course => user.createdCourses?.includes(course.id))
    : [];

  const totalStudents = myCourses.reduce((acc, course) => acc + course.students, 0);
  const totalLessons = myCourses.reduce((acc, course) => acc + course.lessons.length, 0);

  const handleViewCourse = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl mb-2">
            Welcome, Teacher {user?.name}! 👨‍🏫
          </h1>
          <p className="text-gray-600">
            Manage your courses and help students learn
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-lg p-2">
                  <BookOpen className="size-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{myCourses.length}</div>
                  <div className="text-sm text-gray-600">My Courses</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 text-green-700 rounded-lg p-2">
                  <Users className="size-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{totalStudents}</div>
                  <div className="text-sm text-gray-600">Total Students</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 text-purple-700 rounded-lg p-2">
                  <TrendingUp className="size-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{totalLessons}</div>
                  <div className="text-sm text-gray-600">Total Lessons</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 text-orange-700 rounded-lg p-2">
                  <Eye className="size-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your teaching content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button className="bg-green-600 hover:bg-green-700 h-auto py-6 flex-col gap-2">
                  <Plus className="size-6" />
                  <span>Create New Course</span>
                </Button>
                <Button variant="outline" className="h-auto py-6 flex-col gap-2">
                  <Edit className="size-6" />
                  <span>Upload Materials</span>
                </Button>
                <Button variant="outline" className="h-auto py-6 flex-col gap-2">
                  <Users className="size-6" />
                  <span>View Students</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl">My Courses</h2>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="size-4 mr-2" />
              New Course
            </Button>
          </div>

          {myCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCourses.map(course => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={
                        course.level === 'Beginner' ? 'secondary' :
                        course.level === 'Intermediate' ? 'default' : 'destructive'
                      }>
                        {course.level}
                      </Badge>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-gray-600">Students</div>
                          <div className="text-xl font-bold">{course.students.toLocaleString()}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-gray-600">Lessons</div>
                          <div className="text-xl font-bold">{course.lessons.length}</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleViewCourse(course.id)}
                        >
                          <Eye className="size-4 mr-2" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                        >
                          <Edit className="size-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <BookOpen className="size-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl mb-2">No Courses Yet</h3>
                <p className="text-gray-600 mb-6">
                  Create your first course and start sharing knowledge with students
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="size-4 mr-2" />
                  Create Your First Course
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Tips for Teachers */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Tips for Effective Online Teaching</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  Keep Content Concise
                </h4>
                <p className="text-sm text-gray-600">
                  Break down complex topics into digestible lessons. Students learn better with focused, bite-sized content.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-2xl">💾</span>
                  Provide Downloadable Resources
                </h4>
                <p className="text-sm text-gray-600">
                  Add PDFs, worksheets, and other materials students can download for offline study.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌍</span>
                  Consider Data Usage
                </h4>
                <p className="text-sm text-gray-600">
                  Remember that many African students have limited data. Use text and images efficiently.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Make It Practical
                </h4>
                <p className="text-sm text-gray-600">
                  Include real-world examples and practical exercises that students can apply immediately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

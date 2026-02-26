import { useParams, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { getCourseById } from '../data/courses';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { BookOpen, Clock, Users, CheckCircle2, Circle, ArrowLeft } from 'lucide-react';

export function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const { user, enrollInCourse } = useAuth();
  const navigate = useNavigate();

  const course = courseId ? getCourseById(courseId) : undefined;

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl mb-4">Course not found</h1>
          <Button onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const isEnrolled = user?.enrolledCourses.includes(course.id);
  const completedLessons = course.lessons.filter(lesson =>
    user?.completedLessons.includes(lesson.id)
  ).length;
  const progress = Math.round((completedLessons / course.lessons.length) * 100);

  const handleEnroll = () => {
    if (user) {
      enrollInCourse(course.id);
    } else {
      navigate('/signup');
    }
  };

  const handleLessonClick = (lessonId: string) => {
    if (isEnrolled) {
      navigate(`/course/${courseId}/lesson/${lessonId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="size-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Course Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <Badge variant={
                  course.level === 'Beginner' ? 'secondary' :
                  course.level === 'Intermediate' ? 'default' : 'destructive'
                }>
                  {course.level}
                </Badge>
                <Badge variant="outline">{course.category}</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="size-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="size-4" />
                  {course.students.toLocaleString()} students
                </div>
              </div>
            </div>
            <CardTitle className="text-3xl mb-2">{course.title}</CardTitle>
            <CardDescription className="text-lg">{course.description}</CardDescription>
            {course.teacherName && (
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <span>Taught by</span>
                <span className="font-medium text-gray-900">{course.teacherName}</span>
              </div>
            )}
          </CardHeader>
          <CardContent>
            {isEnrolled ? (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Your Progress</span>
                    <span className="font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                <div className="text-sm text-gray-600">
                  {completedLessons} of {course.lessons.length} lessons completed
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleEnroll}
                >
                  <BookOpen className="size-5 mr-2" />
                  {user ? 'Enroll in Course' : 'Sign Up to Enroll'}
                </Button>
                <div className="text-sm text-gray-600">
                  {course.lessons.length} lessons • Free access
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Course Content */}
        <Card>
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
            <CardDescription>
              {course.lessons.length} lessons to complete
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {course.lessons.map((lesson, index) => {
                const isCompleted = user?.completedLessons.includes(lesson.id);
                const isClickable = isEnrolled;

                return (
                  <div
                    key={lesson.id}
                    onClick={() => isClickable && handleLessonClick(lesson.id)}
                    className={`
                      flex items-center gap-4 p-4 rounded-lg border
                      ${isClickable ? 'cursor-pointer hover:bg-gray-50 hover:border-green-300' : 'cursor-not-allowed opacity-60'}
                      ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-white'}
                    `}
                  >
                    <div className="flex-shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 className="size-6 text-green-600" />
                      ) : (
                        <Circle className="size-6 text-gray-400" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-500">Lesson {index + 1}</span>
                        {isCompleted && (
                          <Badge variant="secondary" className="text-xs">Completed</Badge>
                        )}
                      </div>
                      <div className="font-medium">{lesson.title}</div>
                    </div>

                    <div className="flex-shrink-0 text-sm text-gray-500">
                      <Clock className="size-4 inline mr-1" />
                      {lesson.duration}
                    </div>
                  </div>
                );
              })}
            </div>

            {!isEnrolled && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                <p className="text-sm text-blue-800 mb-3">
                  Enroll in this course to access all lessons
                </p>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleEnroll}
                >
                  {user ? 'Enroll Now' : 'Sign Up to Enroll'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
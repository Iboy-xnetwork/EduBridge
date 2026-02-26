import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { getCourseById, getLessonById } from '../data/courses';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, ArrowRight, CheckCircle2, Download, FileText, FileImage, Video, File } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function LessonPage() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const { user, completeLesson } = useAuth();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const course = courseId ? getCourseById(courseId) : undefined;
  const lesson = courseId && lessonId ? getLessonById(courseId, lessonId) : undefined;

  useEffect(() => {
    if (lesson && user?.completedLessons.includes(lesson.id)) {
      setIsCompleted(true);
    }
  }, [lesson, user]);

  if (!course || !lesson) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl mb-4">Lesson not found</h1>
          <Button onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = course.lessons.findIndex(l => l.id === lesson.id);
  const previousLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < course.lessons.length - 1 ? course.lessons[currentIndex + 1] : null;

  const handleComplete = () => {
    completeLesson(lesson.id);
    setIsCompleted(true);
  };

  const handleNext = () => {
    if (nextLesson) {
      navigate(`/course/${courseId}/lesson/${nextLesson.id}`);
    } else {
      navigate(`/course/${courseId}`);
    }
  };

  const handlePrevious = () => {
    if (previousLesson) {
      navigate(`/course/${courseId}/lesson/${previousLesson.id}`);
    }
  };

  const handleDownload = (resourceId: string, resourceName: string) => {
    setDownloadingId(resourceId);
    
    // Simulate download - in real app, this would download the actual file
    setTimeout(() => {
      const blob = new Blob([`Mock content for ${resourceName}`], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = resourceName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDownloadingId(null);
    }, 500);
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf':
      case 'doc':
        return <FileText className="size-5 text-red-600" />;
      case 'image':
        return <FileImage className="size-5 text-blue-600" />;
      case 'video':
        return <Video className="size-5 text-purple-600" />;
      default:
        return <File className="size-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(`/course/${courseId}`)}
            className="mb-4"
          >
            <ArrowLeft className="size-4 mr-2" />
            Back to Course
          </Button>

          <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
            <span>{course.title}</span>
            <span>•</span>
            <span>Lesson {currentIndex + 1} of {course.lessons.length}</span>
          </div>

          <h1 className="text-3xl md:text-4xl mb-2">{lesson.title}</h1>
          
          {isCompleted && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle2 className="size-5" />
              <span className="font-medium">Completed</span>
            </div>
          )}
        </div>

        {/* Downloadable Resources */}
        {lesson.resources && lesson.resources.length > 0 && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Download className="size-5 text-green-600" />
                Downloadable Resources (Study Offline)
              </h3>
              <div className="grid gap-3">
                {lesson.resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      {getResourceIcon(resource.type)}
                      <div>
                        <div className="font-medium">{resource.name}</div>
                        <div className="text-sm text-gray-500">{resource.size}</div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDownload(resource.id, resource.name)}
                      disabled={downloadingId === resource.id}
                    >
                      <Download className="size-4 mr-2" />
                      {downloadingId === resource.id ? 'Downloading...' : 'Download'}
                    </Button>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 flex items-start gap-2">
                <span className="text-green-600">💡</span>
                <span>Download these resources to study offline and save data!</span>
              </p>
            </CardContent>
          </Card>
        )}

        {/* Lesson Content */}
        <Card className="mb-6">
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-green max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4 mt-6" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-3 mt-5" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-xl font-bold mb-2 mt-4" {...props} />,
                  p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                  li: ({ node, ...props }) => <li className="ml-4" {...props} />,
                  code: ({ node, className, children, ...props }) => {
                    const isInline = !className;
                    return isInline ? (
                      <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm" {...props}>
                        {children}
                      </code>
                    ) : (
                      <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm" {...props}>
                        {children}
                      </code>
                    );
                  },
                  strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                  em: ({ node, ...props }) => <em className="italic" {...props} />,
                }}
              >
                {lesson.content}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={!previousLesson}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="size-4 mr-2" />
            Previous Lesson
          </Button>

          <div className="flex gap-3">
            {!isCompleted && (
              <Button
                onClick={handleComplete}
                variant="outline"
                className="flex-1 sm:flex-none border-green-600 text-green-600 hover:bg-green-50"
              >
                <CheckCircle2 className="size-4 mr-2" />
                Mark Complete
              </Button>
            )}
            
            <Button
              onClick={handleNext}
              className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700"
            >
              {nextLesson ? (
                <>
                  Next Lesson
                  <ArrowRight className="size-4 ml-2" />
                </>
              ) : (
                'Back to Course'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
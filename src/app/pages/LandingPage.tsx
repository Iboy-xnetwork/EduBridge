import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { BookOpen, Clock, Wifi, Smartphone, TrendingUp, Users } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl mb-6">
              Learn Digital Skills,<br />Transform Your Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              Accessible, affordable education for every African learner.
              Study at your own pace with minimal internet required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 w-full sm:w-auto">
                  Start Learning Free
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-800 w-full sm:w-auto">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-6">
              Education Should Be For Everyone
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Many students across Africa struggle with expensive learning platforms,
              poor internet connectivity, and lack of practical digital skills training.
              We're here to change that.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 text-green-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wifi className="size-8" />
                </div>
                <h3 className="font-bold mb-2">Low Data Usage</h3>
                <p className="text-gray-600 text-sm">
                  Optimized for slow connections and minimal data consumption
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 text-green-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="size-8" />
                </div>
                <h3 className="font-bold mb-2">Learn At Your Pace</h3>
                <p className="text-gray-600 text-sm">
                  No deadlines, no pressure. Study when it works for you
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 text-green-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="size-8" />
                </div>
                <h3 className="font-bold mb-2">Mobile-First</h3>
                <p className="text-gray-600 text-sm">
                  Works perfectly on any phone, tablet, or computer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Everything You Need To Succeed
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <BookOpen className="size-10 text-green-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Structured Courses</h3>
              <p className="text-gray-600">
                Well-organized lessons that take you from beginner to confident user
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <TrendingUp className="size-10 text-green-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Track Progress</h3>
              <p className="text-gray-600">
                See your learning journey with visual progress tracking
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Users className="size-10 text-green-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Community Support</h3>
              <p className="text-gray-600">
                Learn alongside thousands of African students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-green-100">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-green-100">Courses</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-green-100">Lessons</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-green-100">Free Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready To Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of African students gaining digital skills for the modern world
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

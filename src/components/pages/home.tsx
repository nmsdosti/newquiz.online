import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/VercelAuthProvider";
import UserMenu from "@/components/ui/user-menu";
import Logo from "@/components/ui/logo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PlayCircle,
  Users,
  Trophy,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const features = [
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: "Interactive Quizzes",
      description:
        "Create engaging quizzes with multiple question types and real-time feedback",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multiplayer Fun",
      description:
        "Host live quiz sessions with friends, colleagues, or students",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Leaderboards",
      description:
        "Track performance with dynamic leaderboards and scoring systems",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description:
        "Get immediate feedback and detailed analytics for every quiz",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Create Account",
      description: "Sign up for free and get started in seconds",
    },
    {
      number: "2",
      title: "Build Your Quiz",
      description: "Use our intuitive editor to create engaging questions",
    },
    {
      number: "3",
      title: "Share & Play",
      description:
        "Invite participants and start your interactive quiz session",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral via-coral/90 to-coral/80 text-white">
      {/* Header */}
      <div className="w-full bg-white/95 backdrop-blur-sm flex justify-between items-center px-6 py-4 shadow-lg fixed top-0 left-0 right-0 z-50">
        <Link to="/">
          <Logo className="h-12 w-auto ml-16" />
        </Link>
        <UserMenu />
      </div>

      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto mb-20">
            {/* Left Side: Hero Content */}
            <div className="text-center lg:text-left mb-12 lg:mb-0 lg:w-1/2">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                🎉 Welcome to the Future of Quizzing
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
                newquiz.online
              </h1>
              <h2 className="text-xl lg:text-3xl font-light text-white/90 mb-8 leading-relaxed">
                Create, Share & Play Interactive Quizzes
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-lg">
                Transform learning and engagement with our powerful quiz
                platform. Perfect for educators, trainers, and anyone who loves
                interactive content.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to={user ? "/create" : "/signup"} className="group">
                  <Button className="w-full sm:w-auto rounded-full bg-white text-coral hover:bg-gray-50 text-lg px-8 py-4 h-auto transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link to="/join">
                  <Button className="w-full sm:w-auto rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-coral text-lg px-8 py-4 h-auto transition-all duration-300">
                    Join a Quiz
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side: Hero Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl transform rotate-6"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                  alt="Interactive Learning"
                  className="relative w-full max-w-lg rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">
                Why Choose newquiz.online?
              </h3>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Discover the features that make our platform the perfect choice
                for interactive learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-white mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-white/80">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">How It Works</h3>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Get started with newquiz.online in just three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-white/30 transform -translate-x-1/2 z-0"></div>
                  )}
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-3xl font-bold text-coral">
                        {step.number}
                      </span>
                    </div>
                    <h4 className="text-2xl font-semibold mb-4">
                      {step.title}
                    </h4>
                    <p className="text-white/80 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Types Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Quiz Types</h3>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Choose from different quiz formats to match your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h4 className="text-2xl font-semibold text-white mb-4">
                    Live Quiz
                  </h4>
                  <p className="text-white/80 mb-6">
                    Real-time multiplayer quizzes with instant feedback and live
                    leaderboards
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-white/20 text-white border-white/30">
                      Real-time
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30">
                      Multiplayer
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <h4 className="text-2xl font-semibold text-white mb-4">
                    Poll Quiz
                  </h4>
                  <p className="text-white/80 mb-6">
                    Quick polls and surveys to gather opinions and feedback from
                    your audience
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-white/20 text-white border-white/30">
                      Surveys
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30">
                      Feedback
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">⏰</div>
                  <h4 className="text-2xl font-semibold text-white mb-4">
                    Anytime Quiz
                  </h4>
                  <p className="text-white/80 mb-6">
                    Self-paced quizzes that participants can take at their own
                    convenience
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-white/20 text-white border-white/30">
                      Self-paced
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30">
                      Flexible
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of educators, trainers, and quiz enthusiasts who
              are already using newquiz.online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={user ? "/create" : "/signup"}>
                <Button className="rounded-full bg-white text-coral hover:bg-gray-50 text-lg px-8 py-4 h-auto transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Creating Quizzes
                </Button>
              </Link>
              <Link to="/join">
                <Button className="rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-coral text-lg px-8 py-4 h-auto transition-all duration-300">
                  Join a Quiz Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

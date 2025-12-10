import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { AnimatedButton } from '@/components/AnimatedButton';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-light-pink-100 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-8xl lg:text-9xl text-deep-green-900 mb-4">404</h1>
          <p className="font-heading text-2xl lg:text-3xl text-deep-green-800 mb-4">Page Not Found</p>
          <p className="font-body text-lg text-text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <AnimatedButton to="/" variant="primary" className="mx-auto w-fit">
            Return Home
          </AnimatedButton>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

import React, { useState } from 'react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      <div className="container-custom py-6">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8 bg-dark-800 p-8 rounded-xl shadow-xl"
        >
          <div className="text-center">
            <h2 className="heading-md gradient-text mb-2">
              {isLogin ? 'Welcome Back' : 'Join Zenith Notes'}
            </h2>
            <p className="text-gray-400">
              {isLogin 
                ? 'Enter your credentials to access your account' 
                : 'Create an account to get started with Zenith Notes'}
            </p>
          </div>
          
          {isLogin ? <Login /> : <Signup />}
          
          <div className="text-center mt-4">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary-400 hover:text-primary-300 text-sm font-medium"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Log in"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
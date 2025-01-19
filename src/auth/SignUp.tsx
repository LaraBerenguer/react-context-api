import React, { useRef } from 'react';
import { useAuth } from './AuthContext';

const SignUp: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);
    const { signUp } = useAuth();

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();

        if (emailRef.current && passwordRef.current) {
            signUp(emailRef.current.value, passwordRef.current.value); 
        }
    };

    return (
        <div className="signup-page flex items-center justify-center min-h-screen px-3">
            <div className="signup-container w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            ref={emailRef}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-yellow-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            ref={passwordRef}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-yellow-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password confirmation
                        </label>
                        <input
                            type="password"
                            ref={passwordConfirmRef}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-yellow-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-medium text-black bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="signup-navigation text-center text-xs">
                    Already have an account? Log In
                </div>
            </div>
        </div>
    );
};

export default SignUp;
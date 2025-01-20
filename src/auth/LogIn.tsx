import React, { useRef, useState } from 'react';
import { useAuth } from './AuthContext';

const LogIn: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);
    const { signUp } = useAuth();
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (emailRef.current && passwordRef.current && passwordConfirmRef.current) {

            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                return setError("Your passwords don't match. Try again, young Padawan")
            }

            try {
                setError("")
                setLoading(true)
                await signUp(emailRef.current.value, passwordRef.current.value);
            } catch {
                setError("Failed to create an account.")
            }
            setLoading(false)
        }
    };

    return (
        <div className="signup-page flex items-center justify-center min-h-screen px-3">
            <div className="signup-container w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                {error &&
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Oh no! </strong>
                        <span className="block sm:inline">{error}</span>                        
                    </div>
                }
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
                        disabled={loading}
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

export default LogIn;
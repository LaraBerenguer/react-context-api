import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../auth.css';
import Logo from './Logo';

const LogIn: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { logIn } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogIn = async (e: React.FormEvent) => {
        e.preventDefault();

        if (emailRef.current && passwordRef.current) {
            try {
                setError("")
                setLoading(true)
                await logIn(emailRef.current.value, passwordRef.current.value);
                navigate("/");
            } catch {
                setError("Failed to log in.")
            }
            setLoading(false)
        }
    };

    return (
        <div className="login-page flex items-center justify-center min-h-[70vh] px-3">
            <div className="login-container w-full max-w-md p-10 space-y-8 bg-white rounded-2xl shadow-md">
                <div className="login-page-logo">
                    <Logo />
                </div>
                <div className='login-page-h2 flex flex-col gap-3'>
                    <h2 className="text-2xl font-bold">Log In</h2>
                    <p>Log in to Star Wars with your MyDisney account.</p>
                </div>
                {error &&
                    <div className="login-error bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Oh no! </strong>
                        <span className="block sm:inline">{error}</span>
                    </div>
                }
                <form onSubmit={handleLogIn} className="login-form space-y-4">
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
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-4 py-2 font-medium text-black bg-yellow-400 rounded-3xl hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
                    >
                        Log In
                    </button>
                </form>
                <div className="login-navigation text-center text-xs">
                    Don't have an account? <Link className='text-decoration-line: underline' to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
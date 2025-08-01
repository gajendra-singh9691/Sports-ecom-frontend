import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const api_uri = import.meta.env.VITE_API_URL

const LoginPage = () => {
    
    const Navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api_uri}/admin/login`, { username: username,
            password: password})
            
            if(response.data.status == "success"){
                Navigate('/admin-panal')
            }
            else {
                alert('wrong username or password')
            }
        } catch (error) {
            console.log({ message: 'Server error' });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#151D27] to-[#252C38]">
            <div className="bg-[#222F3E] rounded-2xl shadow-2xl px-10 py-12 w-full max-w-md flex flex-col items-center">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                    Login
                </h2>
                <form className="w-full flex flex-col gap-5" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username" className="block text-white text-sm mb-2">
                            Admin Id:
                        </label>
                        <input
                            id="username"
                            type="text"
                            required
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-[#304357] text-white focus:bg-[#3a4a60] outline-none border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-white text-sm mb-2">
                            Password:
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-[#304357] text-white focus:bg-[#3a4a60] outline-none border-none"
                        />
                    </div>
                    {errorMessage && (
                        <div className="text-red-400 text-center text-sm">{errorMessage}</div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-3 mt-2 bg-white text-[#252C38] font-bold rounded-full text-lg transition-colors hover:bg-gray-500 hover:text-white cursor-pointer disabled:opacity-70"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if(!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('/api/dashboard/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {

        throw new Error(data.message || 'Login failed');
      }
      localStorage.setItem('admin_token', data.token);
      router.push('/dashboard');
    } catch (err) {
      setError(
        (err as Error).message ?? 'Login failed. Please try again.');
    }
  }

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 bg-[#31394c] p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
        {error && <div className="text-red-400 mb-4">{error}</div>}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">E-Mail</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="johndoe@email.com" className="mt-1 w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="mt-1 w-full p-2 border rounded" required />
        </div>
        <button type="submit" className="cursor-pointer w-full bg-amber-500 text-black py-2 rounded">Log in</button>
      </form>
    </div>
  )
}

'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
      // Redirect to the home page or dashboard after successful login
      router.push("/plants");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
      <main className="font-mono flex min-h-screen flex-col items-center justify-between p-4">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/logo-512x512.png"
              alt="Botanist Logo"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
              Sign In
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black text-xs block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    placeholder="me@example.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-green-600 hover:text-green-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="1d0x3K$*Q(@"
                    className="bg-black text-xs block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              No account?{' '}
              <a href="/register" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                Create one here
              </a>
              <br /><br />
            </p>
            <p className="text-gray-500 text-center text-xs">My Botanist is always free, open-source and secure. By creating an account, you are automatically gaining access to all current and future features. Your data won't be sold to anyone and will only ever be disclosed to you.</p>
          </div>
        </div>
      </main>
  );
}

export default LoginPage;
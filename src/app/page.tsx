import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24">
      <div className="container mx-auto px-4 py-8">
          <div className="max-w-lg mx-auto">
              <h1 className="text-3xl font-semibold text-center mb-4">Welcome to the Bill App</h1>
              <p className="text-lg text-yellow-700 text-center mb-6">Manage your bills easily with our intuitive bill management system.</p>
              <div className="flex justify-center mb-8">
                  <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded mr-4">Login</a>
                  <a href="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">Register</a>
              </div>
              <p className="text-sm text-center text-gray-500">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>.</p>
              <p className="text-sm text-center text-gray-500">New user? <a href="#" className="text-green-500 hover:underline">Sign up here</a>.</p>
          </div>
      </div>
    </main>
  );
}

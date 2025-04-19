export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <img
        src="/avatar.jpg"
        alt="Avatar"
        className="w-32 h-32 rounded-full border-4 border-white mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Hi, I'm [Your Name]</h1>
      <p className="text-lg text-gray-300">Welcome to my personal space on the web.</p>
    </div>
  );
}
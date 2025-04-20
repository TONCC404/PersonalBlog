
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="z-10 flex flex-col items-center">
        <img
          src="/avatar.jpg"
          alt="Avatar"
          className="w-32 h-32 rounded-full border-4 border-white mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Cong Cao</h1>
        <Link href="/about">
          <p className="text-lg text-gray-300 cursor-pointer hover:text-white">
            Welcome to my personal space on the web.
          </p>
        </Link>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
    </div>
  );
}

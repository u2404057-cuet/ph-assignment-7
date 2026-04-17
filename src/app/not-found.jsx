import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl opacity-70">Oops! Page not found.</p>
      <Link href="/" className="btn bg-green-900 text-white">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

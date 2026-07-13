export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <div className="max-w-3xl text-center">

        <h1 className="text-6xl font-bold tracking-tight">
          MEMs<span className="text-blue-600">AI</span>
        </h1>

        <p className="mt-6 text-2xl text-gray-700">
          Your Intelligence. Your Memory. Your Control.
        </p>

        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
          A secure, user-owned memory vault that allows people to control,
          protect, and share their personal intelligence with authorized AI
          assistants and trusted organisations.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold">
            Enter Your Vault
          </button>

          <button className="rounded-xl border border-gray-300 px-8 py-3 font-semibold">
            Learn More
          </button>
        </div>

      </div>
    </main>
  );
}
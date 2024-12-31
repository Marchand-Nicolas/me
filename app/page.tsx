export default function Home() {
  return (
    <main className="flex min-h-screen h-[892px] lg:h-auto flex-col items-center justify-between p-12 lg:p-24 overflow-x-hidden">
      <div className="flex flex-col gap-6">
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-900 dark:to-blue-900 sm:text-8xl sm:bg-gradient-to-br sm:to-blue-500 sm:dark:from-transparent sm:dark:to-blue-900 lg:text-6xl">
            Nicolas Marchand
          </h1>
        </div>
        <p className="block mx-auto border-b border-gray-300 from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit static w-auto  rounded-xl border px-4 py-1 dark:bg-zinc-800/30">
          Freelance Developer
        </p>
      </div>
      <div className="grid text-center lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://github.com/Marchand-Nicolas"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Github{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            My development projects and contributions.
          </p>
        </a>

        <a
          href="https://app.onlydust.com/u/Marchand-Nicolas"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            OnlyDust{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Open-source contributions.
          </p>
        </a>

        <a
          href="https://t.me/NicolasMarchand"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Telegram{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Messaging.</p>
        </a>

        <a
          href="mailto:contact@devni.co"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            contact@devni.co
          </p>
        </a>
      </div>
      <span>© 2024 Nicolas Marchand</span>
    </main>
  );
}

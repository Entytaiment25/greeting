import { Html } from "@elysiajs/html";

export const Greeting = ({ name }: { name?: string }) => (
  <>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Greeting</title>
        <script src="https://unpkg.com/@tailwindcss/browser@4" />
      </head>
      <body class="bg-neutral-900 min-h-screen flex flex-col">
        <main class="flex-1 flex items-center justify-center p-4">
          <h1 class="text-4xl font-extrabold text-white text-center">
            {name ? (
              <>
                Hello,{" "}
                <span class="text-neutral-900 bg-blue-400 px-2 py-1 rounded">
                  {name}
                </span>
              </>
            ) : (
              <>
                Welcome!
                <div class="flex items-center justify-center mt-6">
                  <div class="px-2 py-1 bg-blue-400 text-neutral-900 rounded text-sm animate-pulse">
                    try adding a name to the URL
                  </div>
                </div>
              </>
            )}
          </h1>
        </main>
        <footer class="text-center text-gray-400 p-4">
          <p>
            Made with{" "}
            <a href="https://bun.sh" class="text-blue-400">
              Bun
            </a>
            ,{" "}
            <a href="https://elysiajs.com" class="text-blue-400">
              ElysiaJS
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com" class="text-blue-400">
              Tailwindcss
            </a>
          </p>
        </footer>
      </body>
    </html>
  </>
);

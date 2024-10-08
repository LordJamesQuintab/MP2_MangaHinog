import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 lg:grid lg:grid-cols-5 mt-78 px-4 py-5">
      <div className="relative block h-20 lg:col-span-2 lg:h-full">
        <img
          src="https://w0.peakpx.com/wallpaper/374/901/HD-wallpaper-sacrifice-anime-enhancer-manga-gon-css-nen-user-limitation-transformation-hunter-x-hunter-chimera-ant-arc.jpg"
          alt="Anime Manga"
          className="absolute inset-0 h-full w-full object-cover rounded-lg"
        />
      </div>

      <div className="px-4 py-8 sm:px-3 lg:col-span-3 lg:px-4 lg:py-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-wide text-black">
            Any Suggestions? Contact Us
          </p>

          <div className="space-y-2">
            <div>
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="email"
                className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="Message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="Message"
                name="message"
                className="mt-1 h-32 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <button
              className="inline-block rounded-md border border-blue-600 bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Submit
            </button>
          </div>

          <ul className="mt-8 flex gap-6">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-2 border-t border-gray-300 pt-3 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 Manga Hinog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

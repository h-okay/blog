import { useEffect, useState } from "react";

export default function Comments() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadIssoScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://isso.fly.dev/js/embed.min.js";
        script.setAttribute("data-isso", "https://isso.fly.dev/");
        script.setAttribute("data-isso-css", "true");
        script.setAttribute("data-isso-sorting", "upvotes");
        script.async = true;

        script.onload = () => resolve(true);
        script.onerror = () => reject(false);

        document.head.appendChild(script);
      });
    };

    loadIssoScript()
      .then(() => setScriptLoaded(true))
      .catch(error => console.error("Failed to load Isso script:", error));
  }, []);

  return (
    <section id="comments" className="w-full p-0">
      <h2 className="pb-5 text-xl font-semibold">Comments</h2>
      {!scriptLoaded && (
        <div id="loading-animation">
          <svg
            className="text-gray-500 h-5 w-5 animate-spin self-center"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      <div id="isso-thread"></div>
    </section>
  );
}

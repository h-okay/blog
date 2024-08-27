import { useEffect, useState } from "react";

export default function Comments() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const scriptElem = document.createElement("script");
    scriptElem.type = "text/javascript";
    scriptElem.setAttribute("data-isso", "https://isso.fly.dev/");
    scriptElem.setAttribute("src", "https://isso.fly.dev/js/embed.min.js");
    scriptElem.setAttribute("data-isso-css", "true");
    scriptElem.async = true;

    const headElem = document.querySelector("head");
    headElem?.appendChild(scriptElem);

    setLoading(false);
  }, []);

  return (
    <section id="comments" className="w-full p-0">
      <h2>Comments</h2>

      {loading && (
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

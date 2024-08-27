import { useEffect } from "react";
import { theme } from "../../tailwind.config.cjs";

declare global {
  interface Window {
    REMARK42: any;
    remark_config: any;
  }
}

const insertScript = (id: string, parentElement: HTMLElement) => {
  const script = window.document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.id = id;

  let url = window.location.origin + window.location.pathname;
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }

  const host = import.meta.env.PUBLIC_REMARK_URL;

  script.innerHTML = `
    var remark_config = {
      host: "${host}",
      site_id: "blog.hakanokay.dev",
      url: "${url}",
      theme: "dark",
      components: ["counter", "embed"],
    };
    !function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);`;

  parentElement.appendChild(script);
};

const removeScript = (id: string, parentElement: HTMLElement) => {
  const script = window.document.getElementById(id);
  if (script) {
    parentElement.removeChild(script);
  }
};

const manageScript = () => {
  if (!window) {
    return () => {};
  }
  const { document } = window;
  if (document.getElementById("remark42")) {
    insertScript("comments-script", document.body);
  }

  return () => removeScript("comments-script", document.body);
};

export default function Comments() {
  useEffect(manageScript, []);
  useEffect(() => {
    if (window.REMARK42) {
      window.REMARK42.changeTheme(localStorage.getItem("theme") || "light");
    }
  }, [theme]);

  return (
    <>
      <h2>Comments</h2>
      <p>
        There are <span className="remark42__counter"></span> comments.
      </p>
      <div id="remark42"></div>
    </>
  );
}

// Personalises the home hero with the member's first name and points the
// "Ask a question" button at the member's own Q&A home (settings.yml maps
// group -> category slug; first match wins, fallback is General). If any of
// this fails the hero reads without the name and the button opens a plain
// composer, so degradation is calm.
import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.0", (api) => {
  const fill = () => {
    const user = api.getCurrentUser();
    const name = document.querySelector(".e8-name");
    const wrap = document.querySelector(".e8-name-wrap");
    if (user && name && wrap) {
      name.textContent = (user.name || user.username).split(" ")[0];
      wrap.classList.add("show");
    }
    const ask = document.querySelector(".e8-ask");
    if (!ask) return;
    const groups = new Set(
      (user?.groups ?? []).map((g) => (g.name || "").toLowerCase())
    );
    let slug = (settings.ask_button_fallback || "").trim();
    for (const row of String(settings.ask_button_routes || "").split("|")) {
      const [group, target] = row.split(",").map((s) => s.trim());
      if (group && target && groups.has(group.toLowerCase())) {
        slug = target;
        break;
      }
    }
    ask.setAttribute(
      "href",
      slug ? `/new-topic?category=${encodeURIComponent(slug)}` : "/new-topic"
    );
  };
  api.onPageChange(fill);
});

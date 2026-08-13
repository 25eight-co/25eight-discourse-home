// Personalises the home hero with the member's first name. Everything else in
// this component is HTML/CSS; if this fails the hero simply reads without the
// name, so degradation is calm.
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
  };
  api.onPageChange(fill);
});

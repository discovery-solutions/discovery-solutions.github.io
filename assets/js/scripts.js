const API = "https://dscvr-free-courses.vercel.app";
// const API = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form.card");

  form.addEventListener("submit", async function(event) {
    event.preventDefault();

    document.querySelector(".card-button").innerHTML = "Registrandos dados...";

    const data = new FormData(form);

    try {
      const raw = await fetch(API + "/api/form", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
        }),
      });

      const res = await raw.json();

      document.querySelector(".message").innerHTML = "Seu contato foi registrado com sucesso!";
      document.querySelector(".message").classList.add("success");
    } catch (e) {
      document.querySelector(".message").innerHTML = "Tivemos um problema em nossos servidores, e não foi possível registrar seus dados no momento.";
      document.querySelector(".message").classList.add("error");
    } finally {
      document.querySelector(".card-button").innerHTML = "Obrigado!";
    }
  });
});

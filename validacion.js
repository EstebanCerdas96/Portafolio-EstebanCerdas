//Haz tú validación en javascript acá
const form = document.querySelector(".formcontato__form");
const buttonMailTo = document.querySelector("#mail");

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const forma = new FormData(this);
    console.log(forma.get("nombre"));
    buttonMailTo.setAttribute("href", `mailto:ecerdas_96@hotmail.com?subject=${forma.get("asunto")}&body=${forma.get("mensaje")}`);
    buttonMailTo.click()
}
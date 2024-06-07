import "../css/main.css";

const searchBtn = document.querySelector("#searchBtn") as HTMLButtonElement;
const closeBtn = document.querySelector("#closeBtn") as HTMLButtonElement;

searchBtn.addEventListener("click", () => {
    document.querySelector("#btns")?.classList.add("hidden");
    document.querySelector("#logo")?.classList.add("hidden");

    document.querySelector("search")?.classList.remove("hidden");
    document.querySelector("search")?.classList.add("flex");

    document.querySelector("form")?.classList.remove("hidden");
    closeBtn.classList.remove("hidden")
})

closeBtn.addEventListener("click", () => {
    document.querySelector("#btns")?.classList.remove("hidden");
    document.querySelector("#logo")?.classList.remove("hidden");

    document.querySelector("search")?.classList.add("hidden");
    document.querySelector("search")?.classList.remove("flex");

    document.querySelector("form")?.classList.add("hidden");
    closeBtn.classList.add("hidden");
})
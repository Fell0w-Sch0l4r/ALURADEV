import "../css/main.css";

const searchBtn = document.querySelector("#searchBtn") as HTMLButtonElement;
const closeBtn = document.querySelector("#closeBtn") as HTMLButtonElement;
const searchInput = document.querySelector("#searchInput") as HTMLInputElement;
const logo = document.querySelector("#logo") as HTMLDivElement;
const rightSideBtns = document.querySelector("#btns") as HTMLDivElement;

const searchSection = document.querySelector("search") as HTMLDivElement;
const searchForm = document.querySelector("search form") as HTMLFormElement;


searchBtn.addEventListener("click", showSearchBar)

closeBtn.addEventListener("click", hideSearchBar)


export function addHtmlElementClass(element: HTMLElement, className: string): void{
    element.classList.add(className)
}


export function removeHtmlElementClass(element: HTMLElement, className: string): void {
    element.classList.remove(className);
}


function showSearchBar(){
    addHtmlElementClass(rightSideBtns, "hidden");

    addHtmlElementClass(logo, "hidden");

    addHtmlElementClass(searchSection, "flex");
    removeHtmlElementClass(searchSection, "hidden");

    removeHtmlElementClass(searchForm, "hidden");
    removeHtmlElementClass(closeBtn, "hidden");

    searchInput.focus();
}

function hideSearchBar(){
     removeHtmlElementClass(rightSideBtns, "hidden");
     removeHtmlElementClass(logo, "hidden");

     removeHtmlElementClass(searchSection, "flex");
     addHtmlElementClass(searchSection, "hidden");

     addHtmlElementClass(searchForm, "hidden");
     addHtmlElementClass(closeBtn, "hidden");
}
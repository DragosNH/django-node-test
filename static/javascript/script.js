import { carouselDiaporama } from "./caroussel.js";
import { houseModel } from "./model.js";

const carouselBtn = document.querySelector(".carouselBtn");

class PageLoader {
    constructor(classItem) {
        this.container = document.querySelector(`.${classItem}`);
    }

    async load(url, callback = null) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error loading ${url}`);
            const html = await response.text();
            this.container.innerHTML = html;

            if (callback) {
                setTimeout(callback, 0);
            }
        } catch (error) {
            this.container.innerHTML = `<p style="color:red;">${error.message}</p>`;
        }
    }
}

const pageLoader = new PageLoader('container');

carouselBtn.addEventListener("click", () => {
    pageLoader.load("/partials/carousel/", carouselDiaporama);
});

pageLoader.load("/partials/carousel/", carouselDiaporama);


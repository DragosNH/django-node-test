export function carouselDiaporama(){
    const miniContainer = document.querySelectorAll(".miniContainer");
    const leftArrow = document.querySelector(".leftArrow");
    const rightArrow = document.querySelector(".rightArrow");
    let currentIndex = 0;

    rightArrow.addEventListener("click", function(){
        miniContainer[currentIndex].classList.add("hidden");
        currentIndex = (currentIndex + 1) % miniContainer.length;
        miniContainer[currentIndex].classList.remove("hidden");
    });

    leftArrow.addEventListener("click", function(){
        miniContainer[currentIndex].classList.add("hidden");
        currentIndex = (currentIndex - 1 + miniContainer.length) % miniContainer.length;
        miniContainer[currentIndex].classList.remove("hidden");
    });

}
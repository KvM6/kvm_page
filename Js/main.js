document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navbar");
    const footerYear = document.querySelector(".footer-year")

    // function addShadow () {
    //     if (window.scrollY >= 0) {
    //         nav.classList.add("nav-bg-shadow");
    //     } else {
    //         nav.classList.remove("nav-bg-shadow");
    //     }
    // }

    // window.addEventListener("scroll", addShadow)

    const handleCurrentYear = () => {
        const year = new Date().getFullYear();

        footerYear.innerText = year;
    }
    
    handleCurrentYear();

} );
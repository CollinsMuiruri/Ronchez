let scrollProgressIndicator = document.getElementsByClassName("scroll-progress-indicator");
let postContent = document.getElementsByClassName("blog-wrapper");

window.addEventListener("scroll", () => {
    let scrollAmount = window.scrollY;
    let postHeight = postContent[0].clientHeight - window.innerHeight + 520;

    let progress = Math.min((scrollAmount / postHeight) * 100, 100);

    // console.log("Progress: " + progress)

    scrollProgressIndicator[0].style.width = progress + "%"
});
const gsap = window.gsap
const ScrollTrigger = window.ScrollTrigger

//Custom Cursor
if(window.innerWidth >768){
    const cursor = document.querySelector(".cursor")
    const cursorfollowers = document.querySelector(".cursor-followers")

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x:e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1,
        })

        gsap.to(cursorfollowers, {
            x: e.clientX - 20,
            y: e.clientY -20,
            duration: 0.2,
        })
    })
}
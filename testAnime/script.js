    import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm"
    
    const count = document.getElementById("pTest")
    let number = parseInt(count.innerText)

    animate(0, number, {
        duration: 2,
        ease: "circOut",
        onUpdate: (latest) => (count.innerHTML = Math.round(latest)),
    })
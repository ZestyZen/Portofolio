// typeEffect
const text = "I'm Rafi Ahsira Prayoga";
let index = 0;

function typeEffect() {
    const displayText = text.slice(0, index);
    document.querySelector('h2').innerHTML = displayText;
    if (index < text.length) {
        index++;
        setTimeout(typeEffect, 100);
    } else {
        index = 0; // Reset indeks ke 0 setelah mencapai panjang teks
        setTimeout(typeEffect, 5000); // Tunggu 2 detik sebelum mulai kembali
    }
}

// Mulai efek ketik saat halaman dimuat
window.onload = typeEffect;

//sidebar
document.addEventListener("DOMContentLoaded", function(event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', ()=> {
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))

    // Your code to run since DOM is loaded and ready
});
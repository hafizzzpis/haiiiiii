const flowers = document.getElementById("flowers");
const envelopeScreen = document.getElementById("envelopeScreen");
const scrapbook = document.getElementById("scrapbook");

const envelope = document.querySelector(".envelope");


function openEnvelope() {

    flowers.classList.remove("active");

    envelopeScreen.classList.add("active");

}


function openLetter() {

    envelope.classList.add("open");

    setTimeout(() => {

        envelopeScreen.classList.remove("active");

        scrapbook.classList.add("active");

    }, 1000);

}
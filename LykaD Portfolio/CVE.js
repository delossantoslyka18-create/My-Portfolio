
function downloadCV() {
    const cv = document.getElementById("cv-content");

    const options = {
        margin: 0.4,
        filename: "Lyka_Delos_Santos_CV.pdf",

        image: {
            type: "jpeg",
            quality: 0.98
        },

        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0
        },

        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf()
        .set(options)
        .from(cv)
        .save();
}

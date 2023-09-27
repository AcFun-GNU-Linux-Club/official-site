function showPic(options) {
    $(".show-screenshot-dialog-dialog > img").attr("src", options.src);
    $(".show-screenshot-dialog-dialog .author").text(options.author);
    $(".show-screenshot-dialog-dialog .subdesc").text(options.subdesc);
    $(".show-screenshot-dialog").fadeIn(100);
}


$(() => {
    $('map').imageMapResize();
    $(".show-screenshot-dialog").click(() => {
        $(".show-screenshot-dialog").fadeOut(100);
    })
    $("area#pic1").click(() => {
        showPic({
            src: "index_assets/img/gnu_linux_1.jpg",
            author: "tsai",
            subdesc: "Arch, KDE"
        });
    });
    $("area#pic2").click(() => {
        showPic({
            src: "index_assets/img/gnu_linux_2.png",
            author: "肥尔丹",
            subdesc: "Manjaro, KDE, Firefox"
        });
    });
    $("area#pic3").click(() => {
        showPic({
            src: "index_assets/img/gnu_linux_3.jpg",
            author: "mowow",
            subdesc: "Endeavour OS, KDE, Edge"
        });
    });
    $("area#pic4").click(() => {
        showPic({
            src: "index_assets/img/gnu_linux_4.jpg",
            author: "沐星塵",
            subdesc: "Fedora, GNOME, Firefox, Lyx"
        });
    });

    fetch("index_assets/img/index_sketch_2.svg")
    .then(resp => resp.text())
    .then(text => {
        console.log(text);
        $("#sketch2").html(text);
        $("#sketch2").children("svg").css("width", "100%");
        let volunteeringLinkEle = $("#sketch2").contents().find("#link_volunteering");
        volunteeringLinkEle.css("cursor", "pointer");
        volunteeringLinkEle.click(() => {
            location.href = "https://wiki.acglc.eati.top/zh/%E5%B8%AE%E5%8A%A9%E5%85%B6%E4%BB%96%E9%A1%B9%E7%9B%AE"
        })
    })

})
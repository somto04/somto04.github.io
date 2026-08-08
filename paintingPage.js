function openPainting(id) {
    window.location.href = "painting.html?id=" + id;
}

const paintings = {
    swirlyWirly: {
        title: "Swirly Wirly",
        image: "artworks/swirlywirly.jpeg",
        desc: "yabba dabba doo"
    },
}

const params = URLSearchParams(window.location.search);
const id = params.get("id");

const painting = paintings[id];
document.getElementById("painting-title").textContent = painting.title;
document.getElementById("painting-image").src = painting.image;
document.getElementById("painting-desc").textContent = painting.desc;
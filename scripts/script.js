let sidebar = document.getElementById("nav");

let req = new XMLHttpRequest();
req.open("GET", "./files.html");
req.responseType = "document";
req.send();

req.addEventListener('load', () => {
    let res = req.response;
    res = res.body.innerText.trim().split(/\r?\n/);
    for (let i = 0; i < res.length; ++i) {
        res[i] = res[i].trim();
    }

    for (let file of res) {
        let onclickText =
            "displayWebpage('" + "./pages/" + file + "')";
        sidebar.innerHTML +=
            '<a href="#"   onclick="' + onclickText + '">' +
            file +
            "</a>";
    }
});

function displayWebpage(url) {
    let content = document.getElementById("content");

    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.responseType = "document";
    req.send();

    req.addEventListener('load', () => {
        let res = req.response;
        content.innerHTML = res.body.innerHTML;
    });
}
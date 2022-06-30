var finder = document.querySelector("#search"),
    list = document.querySelector("#match-list"),
    lib = library();

finder.addEventListener("keyup", onKeydown);

function onKeydown(e) {
    if (!e.target.value) { list.innerHTML = ''; return; }
    var results = FS.search(e.target.value, lib);
    if (results.success) {
        outputSearchResults(results);
        console.log(results);
    } else {
        console.error(results);
    }
}

function outputSearchResults(results) {
    list.innerHTML = '';
    if (results.count === lib.length) return;
    if (results.exact.length) label(list, '<p style="background: #ddd;color: #333;padding: 5px;letter-spacing: 1.5px;">Defuzzifikasi</p><div class="bg-primary"> </div>');
    outputMatches(results.exact);
    if (!results.fuzzy.length) return;
    if (results.fuzzy.length) label(list, '<p style="background: #ddd;color: #333;padding: 5px;letter-spacing: 1.5px;">Fuzzy Inference Engine</p>');
 
    outputMatches(results.fuzzy);
}

function outputMatches(matchesArray) {
    matchesArray.forEach((match) => {
        var el = document.createElement('div');
        el.setAttribute('class', 'bg-el')
        match._substrings.forEach((str) => {
            if (str.match) {
                el.innerHTML += `<span style="background-color: #9A998C;color: #333;font-weight: bold;">${str.str}</span>`;
            } else {
                el.innerHTML += str.str;
            }
        });
        list.appendChild(el);
    });
}

function label(list, text) {
    var line = document.createElement('li');
    line.innerHTML = text;
    line.className = 'label';
    list.appendChild(line);
}
function library() {
    return [
        "m. sholahuddin al ayyuby (2002040926)",
        "adieto dwi wahyu saputra (2002040945)",
        "muhammad hubbab hamadhan (2002040946)",
        "mohammad nursalim (2002040947)",
        "paseh alannurdin rohmatulloh (2002040948)",
        "nuris lailatus shobaroh (2002040949)",
        "ahmad ilyasa' alfirdaus (2002040951)",
        "muchammad solakhuddin ihsan (2002040952)",
        "ari viqri zakaria (2002040954)",
        "cicko maulana muhammad (2002040955)",
        "muhammad agus sugianto (2002040956)",
        "idham rizky al fatah ghoni (2002040957)",
        "riki nurfalakhi (2002040958)",
        "firda arya dinata (2002040959)",
        "abdul rochim wachid (2002040960)",
        "muhammad rifqi hamdani (2002040962)",
        "ahmad fatich chumaidi (2002040963)",
        "fahmi zainal habib (2002040966)"
    ];
}

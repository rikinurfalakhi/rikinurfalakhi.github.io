const select = document.getElementById('select')
const search = document.getElementById('search')
const tampilData = document.getElementById('blokdata')

const pencarian = async pilihData => {
    const dataAll = await fetch('all.json')
    const pilihAll = await dataAll.json()
    const search_position = 0

    let matches = pilihAll.filter(item => {
        const regex = new RegExp(`^${pilihData}`, `gi`)
        return item.name.match(regex) || item.capital.match(regex)
    })

    if (pilihData.length === 0) {
        console.log('kosong')
        matches = [];
    }
    outputHTML(matches)
}

const outputHTML = matches => {
    if (matches.length > 0) {
        const x = "<strong>${str.str}</strong>"
        const html = matches.map(match =>
            `<div class="card card-body mb-1">\
        <h4>${match.name}(${match.capital})</h4>\
    </div>\
    `
        ).join('')
        tampilData.innerHTML = html

    }
}
search.addEventListener('input', () => pencarian(search.value))





$('#select').change(function () {
    if ($('#select').val() == 'dataAwal') {
        const pencarian = async pilihData => {
            const data1 = await fetch('state_capitals.json')
            const pilihSatu = await data1.json()

            let matches = pilihSatu.filter(item => {
                const regex = new RegExp(`^${pilihData}`, `gi`)
                return item.name.match(regex) || item.capital.match(regex)
            })

            if (pilihData.length === 0) {
                console.log('kosong')
                matches = [];
            }
            outputHTML(matches)
        }

        const outputHTML = matches => {
            if (matches.length > 0) {
                const html = matches.map(match =>
                    `<div class="card card-body mb-1">\
                <h4>${match.name}(${match.capital})</h4>\
            </div>\
            `
                )
                    .join('')
                tampilData.innerHTML = html
            }
        }
        search.addEventListener('input', () => pencarian(search.value))

    }
    else {
        const pencarian = async pilihData => {
            const data2 = await fetch('data2.json')
            const pilihDua = await data2.json()

            let matches = pilihDua.filter(item => {
                const regex = new RegExp(`^${pilihData}`, `gi`)
                return item.name.match(regex) || item.capital.match(regex)
            })

            if (pilihData.length === 0) {
                console.log('kosong')
                matches = [];
            }
            outputHTML(matches)
        }

        const outputHTML = matches => {
            if (matches.length > 0) {
                const html = matches.map(match =>
                    `<div class="card card-body mb-1">\
                <h4>${match.name}(${match.capital})</h4>\
            </div>\
            `
                )
                    .join('')
                tampilData.innerHTML = html
            }
        }
        search.addEventListener('input', () => pencarian(search.value))

    }
})










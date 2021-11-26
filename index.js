let tours = [
    {
        name: 'Dubai',
        price: '$700',
        time: '7day'
    },
    {
        name: 'Turkey',
        price: '$900',
        time: '14day'
    },
    {
        name: 'India',
        price: '$800',
        time: '7day'
    }
];
let edited = -1;

function drawTour() {
    document.getElementById('tourList').innerHTML = '';
    for (let i = 0; i < tours.length; i++) {
        document.getElementById('tourList').innerHTML +=
            '<tr>' +
            '<td>' + (i + 1) + '<td/>' +
            '<td>' + tours[i].name + '<td/>' +
            '<td>' + tours[i].price + '<td/>' +
            '<td>' + tours[i].time + '<td/>' +
            '<td><button onclick="editTour(' + i + ')" type="button" class="btn btn-warning btn-sm">E</button><td/>' +
            '<td><button onclick="deleteTour(' + i + ')" type="button" class="btn btn-danger btn-sm">D</button><td/>' +
            '<tr/>'
    }
}

drawTour();

function addTour() {
    let name = document.forms['myForm']['name'].value;
    let price = document.forms['myForm']['price'].value;
    let time = document.forms['myForm']['time'].value;
    if (name.trim().length > 0 && price.trim().length > 0 && time.trim().length > 0) {
        let newTour = {
            name,
            price,
            time
        };
        if (edited >= 0) {
            tours[edited] = newTour;
            edited = -1
        } else {
            tours.push(newTour);
        }
        drawTour();
        document.forms['myForm'].reset();
    } else {
        alert("Formani to'liq to'ldiring")
    }
}

function deleteTour(index) {
    tours.splice(index, 1);
    drawTour();
}

function editTour(index) {
    document.forms['myForm']['name'].value = tours[index].name;
    document.forms['myForm']['price'].value = tours[index].price;
    document.forms['myForm']['time'].value = tours[index].time;
    edited = index;
}
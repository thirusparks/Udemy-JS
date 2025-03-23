var guests = ['Thiru', 'Prathi', 'Mohan', 'Pradeep'];

var randomNumber = Math.floor(Math.random() * 4);

var guest = guests[randomNumber];

if(guests.includes(guest)) {
    console.log(guest + " will pay for the dinner")
}
// hotel reservations
class Hotel {
 Id 
 Name
 category
 address
 telephone

 constructor (hotelId, hotelName, category, address, telephone){
    
    this.Id = hotelId
    this.Name = hotelName
    this.category = category
    this.address = address
    this.telephone = telephone
     }
}

class Reservation {
    Id
    hotelId
    responsibleName 
    dayIn
    dayOut

    constructor (clientId, hotelId, responsibleName, dayIn, dayOut){
        
        this.Id = clientId
        this.hotelId = hotelId
        this.responsibleName = responsibleName
        this.dayIn = dayIn
        this.dayOut = dayOut
    }
}

//Create arrays
let hotelsArrays = []
let reservationsArrays = []
let idHotel = 1
let clientReserve = 1

// Register hotel
function RegisterHotel() {
    
    let name = prompt("Type the name of hotel")
    let category = parseInt(prompt("Type the category of hotel"))
    let address = prompt("Type the address of hotel")
    let telephone = prompt("Type of the hotel")
    let hotel = new Hotel(idHotel, name, category, address, telephone)
    idHotel++
    hotelsArrays.push(hotel)
}

function RegisterReserve() {
    let idHotel
    let exist = false
    do {
        idHotel = parseInt(prompt("Type the ID of the hotel"))
        for (let i = 0; i < hotelsArrays.length; i++) {
            if (idHotel == hotelsArrays[i].Id) {
                i = hotelsArrays.length
                exist = true
            } else if (i == hotelsArrays.length - 1) {
                console.log("Id of hoteel not registered")
            }
        }
    }   while (!exist)

    let name = prompt("Type the name of responsible")
    let dayIn = parseInt(prompt("Type the day you got in the hotel"))
    let dayOut 
    do {
    
        dayOut = parseInt(prompt("Type the day you're out of the hotel"))
        if (dayOut < dayOut) {
            console.log("The day you leave must be higher than the day in.")
            }
        } while (dayOut < dayIn)

        let reservation = new Reservation(clientReserve, idHotel, name, dayIn, dayOut)
        clientReserve++
        reservationsArrays.push(reservation)
}
    
// function to look for reserves through hotels
    function SearchReservesForHotel(idHotel) {
        reservationsArrays.forEach(reservation => {
                if (idHotel == reservation.idHotel) {
                    let i = idHotel - 1
                    console.log("hotel:", hotelsArrays[i].Name)
                    console.log("responsible: ", reservation.responsibleName)
                    console.log("Day In:", reservation.dayIn)
                    console.log("Day Out:", reservation.dayOut)
                }
        })
    }

// function to look for hotel through reserves
function SearchHotelFromReservations(clientReserve) {
    let idHotel =  reservationsArrays[clientReserve - 1].IdHotel
            console.log("hotel:", hotelsArrays[idHotel - 1].Name)
            console.log("responsible: ", hotelsArrays[idHotel - 1].address)
            console.log("Day In:", reservatio[clientReserve - 1].dayIn)
            console.log("Day Out:", reservation[clientReserve - 1].dayOut)
}
        
// function searching reserve through responsible
function SearchReservesForNames(responsibleNamename) {
    for (let i = 0; i < reservationsArrays.length; i++) {
        if (name == reservationsArrays[i].responsibleName) {
                console.log("id of reserve; " + reservationsArrays[i].Id)
                console.log("hotel: " + hotelsArrays[(reservationsArrays[i].idHotel) - 1].Name)
        }
    }
}

// Function to search hotels through categories
function SearchHotelFromCategory(category) {
    let hotelsSearched = []
    for (let i = 0; i < hotelsArrays.length; i++) {
        if (category == hotelsArrays[i].Category) {
        }
    }
    return hotelsSearched
}

function TelephoneUpdate(idHotel, telephone) {
    hotelsArrays[idHotel - 1].Telephone = telephone
    console.log("Number the telephone updated.")    
}

let continuee = true
do {
    let option = prompt("choose an option: \n1- Register hotel \n2- Register Reservation \n3 - Search reservation through hotel" +
     "\n4 - Search hotel through reservation \n5 - Search reservation though responsible's name \n6 - Search hotels through category" +
    "\n7 - Update telephone of a hotel \n8 - end program")

    switch (option) {
        case "1":
            RegisterHotel()
            break;
        case "2":
            RegisterReserve()
            break;
        case "3":
            SearchReservesForHotel(prompt("Type hotel's id"))
            break;
        case "4":
            SearchHotelFromReservations(prompt("Type the id of reservation"))
            break;
        case "5":
            SearchReservesForNames( prompt("Type the name of the responsible through the reserve"))
            break;
        case "6":
            let hotelsSearched = SearchHotelFromCategory(parseInt(prompt("Type the category you wish to search")))
            console.log(hotelsSearched)
            break;
        case "7":
            let idHotel = parseInt(prompt("Type the id of hotel you wish to update"))
            let telephone = prompt("type the new telephone")
            TelephoneUpdate(idHotel, telephone)
            break;
        case "8":
            console.log("End program")
            continuee = false
            break;
        default:
            console.log("option invalid")
            break;
        }
} while (continuee)

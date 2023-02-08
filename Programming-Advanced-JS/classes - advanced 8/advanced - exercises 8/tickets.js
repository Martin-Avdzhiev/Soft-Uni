function solve (array,sorting){
    class Ticket {
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    const result = [];
    for(const line of array){
        let [currentDestination,currentPrice,currentStatus] = line.split('|');
        currentPrice = Number(currentPrice);
        const newTicket = new Ticket(currentDestination,currentPrice,currentStatus);
        result.push(newTicket);
    }
    
    result.sort((a,b)=> {
        if(sorting == 'price'){

            return a[sorting] - b[sorting];
        }
        else {
            return a[sorting].localeCompare(b[sorting]);
        }
    })
    return result;
}
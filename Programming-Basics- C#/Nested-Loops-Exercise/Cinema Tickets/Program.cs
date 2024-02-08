int kidTickets = 0;
int studentTickets = 0;
int standardTickets = 0;

string movieName = Console.ReadLine();
while (movieName != "Finish")
{
    int freeSeats = int.Parse(Console.ReadLine());
    int tickets = 0;
    string ticketType = Console.ReadLine();
    while (ticketType != "End")
    {
        if (ticketType == "standard")
        {
            standardTickets++;
        }
        else if (ticketType == "student")
        {
            studentTickets++;

        }
        else
        {
            kidTickets++;
        }
        tickets++;
        if (tickets == freeSeats)
        {
            break;
        }
        ticketType = Console.ReadLine();
    }
    
    Console.WriteLine($"{movieName} - {tickets * 100.0 / freeSeats:f2}% full.");
    movieName = Console.ReadLine();
}
double totalTickets = kidTickets + standardTickets + studentTickets;
Console.WriteLine($"Total tickets: {totalTickets}");
Console.WriteLine($"{studentTickets * 100 / totalTickets:F2}% student tickets.");
Console.WriteLine($"{standardTickets * 100 / totalTickets:F2}% standard tickets.");
Console.WriteLine($"{kidTickets * 100 / totalTickets:F2}% kids tickets.");

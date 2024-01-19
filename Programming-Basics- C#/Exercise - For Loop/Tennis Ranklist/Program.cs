double tourniers = int.Parse(Console.ReadLine());
double startingPoints = int.Parse(Console.ReadLine());
double totalTourniersPoints = 0;
double wins = 0;
for(int i = 1; i<= tourniers; i++)
{
    string type = Console.ReadLine();
    if (type == "W")
    {
        wins ++;
        totalTourniersPoints+=2000;
    }
    else if (type == "F")
    {
        totalTourniersPoints +=1200;
    }
    else
    {
        totalTourniersPoints += 720;
    }
}
Console.WriteLine($"Final points: {totalTourniersPoints + startingPoints}");
Console.WriteLine($"Average points: {Math.Floor(totalTourniersPoints/tourniers)}");
Console.WriteLine($"{((wins/tourniers)*100):F2}%");

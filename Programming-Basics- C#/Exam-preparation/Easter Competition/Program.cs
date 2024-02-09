int food = int.Parse(Console.ReadLine());
int bestPoints = 0;
string bestName = "";
for (int i = 0; i < food; i++)
{
    string name = Console.ReadLine();
    string input = Console.ReadLine();
    int points = 0;
    while (input != "Stop")
    {
        points += int.Parse(input);
        input = Console.ReadLine();
    }
    Console.WriteLine($"{name} has {points} points.");

    if (points > bestPoints)
    {
        bestName = name;
        bestPoints = points;
        Console.WriteLine($"{name} is the new number 1!");
    }
}
Console.WriteLine($"{bestName} won competition with {bestPoints} points!");
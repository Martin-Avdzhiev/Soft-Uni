string best = "";
int bestGoals = 0;
while (true)
{
    string name = Console.ReadLine();
    if (name == "END")
    {
        break;
    }
    int goals = int.Parse(Console.ReadLine());
    if (goals > bestGoals)
    {
        best = name;
        bestGoals = goals;
        if(bestGoals >= 10)
        {
            break;
        }
    }

}
Console.WriteLine($"{best} is the best player!");
if(bestGoals > 2)
{
Console.WriteLine($"He has scored {bestGoals} goals and made a hat-trick !!!");
}
else
{
Console.WriteLine($"He has scored {bestGoals} goals.");
}

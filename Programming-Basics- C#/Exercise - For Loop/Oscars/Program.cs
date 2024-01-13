string name = Console.ReadLine();
double points = double.Parse(Console.ReadLine());
int judges = int.Parse(Console.ReadLine());
for (int i = 1; i <= judges; i++)
{
    int judgeNameLength = Console.ReadLine().Length;
    double judgePoints = double.Parse(Console.ReadLine());
    points += (judgeNameLength * judgePoints) / 2;
    if (points > 1250.5)
    {
        break;
    }
}
if(points > 1250.5)
{
    Console.WriteLine($"Congratulations, {name} got a nominee for leading role with {points:F1}!");
}
else
{
    Console.WriteLine($"Sorry, {name} you need {(1250.5 - points):F1} more!");
}


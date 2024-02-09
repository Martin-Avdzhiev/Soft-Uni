double budget = double.Parse(Console.ReadLine());
double fuel = double.Parse(Console.ReadLine());
string day = Console.ReadLine();
if (day == "Saturday")
{
    budget -= (fuel * 2.1) * 0.9;
    budget -= 90;
}
else
{
    budget -= (fuel * 2.1) * 0.8;
    budget -= 80;
}
if (budget < 0)
{
Console.WriteLine($"Not enough money! Money needed: {-budget:f2} lv.");
}
else
{
Console.WriteLine($"Safari time! Money left: {budget:f2} lv.");
}

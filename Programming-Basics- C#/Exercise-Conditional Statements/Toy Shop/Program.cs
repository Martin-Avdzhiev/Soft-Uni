double price = double.Parse(Console.ReadLine());
int puzzles = int.Parse(Console.ReadLine());
int dols = int.Parse(Console.ReadLine());
int bears = int.Parse(Console.ReadLine());
int minions = int.Parse(Console.ReadLine());
int trucks = int.Parse(Console.ReadLine());
int toys = puzzles + dols + bears + minions + trucks;
double toysPrice = puzzles * 2.6 + dols * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;
if (toys >= 50)
{
    toysPrice *= 0.75;
}
    toysPrice *= 0.9;
if (toysPrice >= price)
{
Console.WriteLine($"Yes! {(toysPrice - price):F2} lv left.");
}
else 
{
Console.WriteLine($"Not enough money! {(price - toysPrice):F2} lv needed.");
}

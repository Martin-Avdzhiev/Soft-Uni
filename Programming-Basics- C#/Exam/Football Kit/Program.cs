double shirtPrice = double.Parse(Console.ReadLine());
double target = double.Parse(Console.ReadLine());
double panthsPrice = shirtPrice * 0.75;
double socksPrice = panthsPrice * 0.2;
double shoes = 2 * (shirtPrice + panthsPrice);
double total = panthsPrice + shirtPrice + socksPrice + shoes;
total *= 0.85;
if(total >= target)
{
Console.WriteLine("Yes, he will earn the world-cup replica ball!");
Console.WriteLine($"His sum is {total:f2} lv.");
}
else
{
Console.WriteLine("No, he will not earn the world-cup replica ball.");
Console.WriteLine($"He needs {target - total:f2} lv. more.");
}

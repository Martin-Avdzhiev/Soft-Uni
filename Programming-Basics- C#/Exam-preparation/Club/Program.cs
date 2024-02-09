double desiredProfit = double.Parse(Console.ReadLine());
double income = 0;
while (true)
{
    string name = Console.ReadLine();
    if (name == "Party!")
    {
        break;
    }
    double quantity = int.Parse(Console.ReadLine());
    double price = name.Length * quantity;
    if (price % 2 == 1)
    {
        price *= 0.75;
    }
    income += price;
    if (income >= desiredProfit)
    {
        break;
    }
}
if (income >= desiredProfit)
{
    Console.WriteLine($"Target acquired.");
}
else
{
    Console.WriteLine($"We need {desiredProfit - income:f2} leva more.");
}
Console.WriteLine($"Club income - {income:f2} leva.");

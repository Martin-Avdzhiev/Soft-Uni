double price = double.Parse(Console.ReadLine());
double budget = double.Parse(Console.ReadLine());
string action = Console.ReadLine();
double money = double.Parse(Console.ReadLine());
int spendDays = 0;
int days = 0;
while (true)
{
    days++;
    if (action == "save")
    {
        budget += money;
        spendDays = 0;
    }
    else
    {
        budget -= money;
        spendDays++;
    }
    if (budget < 0)
    {
        budget = 0;
    }
    if (spendDays == 5)
    {
        Console.WriteLine("You can't save the money.");
        Console.WriteLine(days);
        return;
    }
    if (budget >= price)
    {
        Console.WriteLine($"You saved the money for {days} days.");
        return;
    }
    action = Console.ReadLine();
    if(string.IsNullOrEmpty(action))
    {
        return;
    }
    money = double.Parse(Console.ReadLine());
}

string number = Console.ReadLine();
double sum = 0;
while (number != "NoMoreMoney")
{
    if(double.Parse(number) < 0)
    {
        Console.WriteLine("Invalid operation!");
        break;
    }
    sum += double.Parse(number);
    Console.WriteLine($"Increase: {(double.Parse(number)):F2}");
    number = Console.ReadLine();
}
Console.WriteLine($"Total: {sum:F2}");

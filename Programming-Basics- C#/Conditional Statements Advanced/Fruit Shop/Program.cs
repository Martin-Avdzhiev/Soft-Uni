string food = Console.ReadLine();
string day = Console.ReadLine();
double quantity = double.Parse(Console.ReadLine());
double price = 0;
if (day == "Saturday" || day == "Sunday")
{
    if (food == "banana")
    {
        price = quantity * 2.7;
    }
    else if (food == "apple")
    {
        price = quantity * 1.25;
    }
    else if (food == "orange")
    {
        price = quantity * 0.9;
    }
    else if (food == "grapefruit")
    {
        price = quantity * 1.6;
    }
    else if (food == "kiwi")
    {
        price = quantity * 3;
    }
    else if (food == "pineapple")
    {
        price = quantity * 5.6;
    }
    else if (food == "grapes")
    {
        price = quantity * 4.2;
    }
    else
    {
        Console.WriteLine("error");
        return;
    }
}
else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday")
{
    if (food == "banana")
    {
        price = quantity * 2.5;
    }
    else if (food == "apple")
    {
        price = quantity * 1.2;
    }
    else if (food == "orange")
    {
        price = quantity * 0.85;
    }
    else if (food == "grapefruit")
    {
        price = quantity * 1.45;
    }
    else if (food == "kiwi")
    {
        price = quantity * 2.7;
    }
    else if (food == "pineapple")
    {
        price = quantity * 5.5;
    }
    else if (food == "grapes")
    {
        price = quantity * 3.85;
    }
    else
    {
        Console.WriteLine("error");
        return;
    }
}
else
{
    Console.WriteLine("error");
    return;
}
Console.WriteLine($"{price:F2}");

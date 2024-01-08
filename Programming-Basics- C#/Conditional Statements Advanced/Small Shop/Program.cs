string product = Console.ReadLine();
string city = Console.ReadLine();
double quantity = double.Parse(Console.ReadLine());
double total = 0;
switch (city)
{
    case "Sofia":
    if (product == "coffee")
    {
        total = quantity * 0.5;
    }
    else if (product == "water")
    {
        total = quantity * 0.8;
    }
        else if (product == "beer")
    {
        total = quantity * 1.2;
    }
        else if (product == "sweets")
    {
        total = quantity * 1.45;
    }
        else if (product == "peanuts")
    {
        total = quantity * 1.6;
    }
    break;
        case "Plovdiv":
    if (product == "coffee")
    {
        total = quantity * 0.4;
    }
    else if (product == "water")
    {
        total = quantity * 0.7;
    }
        else if (product == "beer")
    {
        total = quantity * 1.15;
    }
        else if (product == "sweets")
    {
        total = quantity * 1.3;
    }
        else if (product == "peanuts")
    {
        total = quantity * 1.5;
    }
    break;
        case "Varna":
    if (product == "coffee")
    {
        total = quantity * 0.45;
    }
    else if (product == "water")
    {
        total = quantity * 0.7;
    }
        else if (product == "beer")
    {
        total = quantity * 1.1;
    }
        else if (product == "sweets")
    {
        total = quantity * 1.35;
    }
        else if (product == "peanuts")
    {
        total = quantity * 1.55;
    }
    break;
}
Console.WriteLine(total);

double kg = double.Parse(Console.ReadLine());
string type = Console.ReadLine();
int distance = int.Parse(Console.ReadLine());
double price = 0;
double express = 0;
if (type == "standard")
{
    if (kg < 1)
    {
        price = 0.03 * distance;
    }
    else if (kg < 10)
    {
        price = 0.05 * distance;
    }
    else if (kg < 40)
    {
        price = 0.1 * distance;
    }
    else if (kg < 90)
    {
        price = 0.15 * distance;
    }
    else if (kg < 150)
    {
        price = 0.2 * distance;
    }
}
else
{
    if (kg < 1)
    {
        price = 0.03 * distance;
        express = 0.8 * 0.03 * kg * distance;
    }
    else if (kg < 10)
    {
        price = 0.05 * distance;
        express = 0.4 * 0.05 * kg * distance;
    }
    else if (kg < 40)
    {
        price = 0.1 * distance;
        express = 0.05 * 0.1 * kg * distance;
    }
    else if (kg < 90)
    {
        price = 0.15 * distance;
        express = 0.02 * 0.15 * kg * distance;
    }
    else if (kg < 150)
    {
        price = 0.2 * distance;
        express = 0.01 * 0.2 * kg * distance;
    }
}
price += express;
Console.WriteLine($"The delivery of your shipment with weight of {kg:f3} kg. would cost {price:f2} lv.");

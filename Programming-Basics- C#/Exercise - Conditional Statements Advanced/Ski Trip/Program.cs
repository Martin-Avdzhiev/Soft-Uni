int days = int.Parse(Console.ReadLine()) -1;
string typeRoom = Console.ReadLine();
string feedback = Console.ReadLine();
double price = 0;
if (typeRoom == "room for one person")
{   
    price = days * 18;
}
else if (typeRoom == "apartment")
{
    price = days * 25;
    if(days < 10)
    {
        price *= 0.7;
    }
    else if(days <=15)
    {
        price *= 0.65;
    }
    else
    {
        price *= 0.5;
    }
}
else
{
        price = days * 35;
    if(days < 10)
    {
        price *= 0.9;
    }
    else if(days <=15)
    {
        price *= 0.85;
    }
    else
    {
        price *= 0.8;
    }
}
if(feedback == "positive")
{
    price *=1.25;
}
else
{
    price *= 0.9;
}
Console.WriteLine($"{price:F2}");

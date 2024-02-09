string city = Console.ReadLine();
string packet = Console.ReadLine();
string vipDiscount = Console.ReadLine();
int days = int.Parse(Console.ReadLine());
double price = 0;
double discount = 0;
int pricePerDay = 0;
switch (city)
{
    case "Bansko":
        if (packet == "withEquipment")
        {
            discount = 0.1;
            pricePerDay = 100;
        }
        else
        {
            discount = 0.05;
            pricePerDay = 80;
        }
        break;
    case "Borovets":
        if (packet == "withEquipment")
        {
            discount = 0.1;
            pricePerDay = 100;
        }
        else
        {
            discount = 0.05;
            pricePerDay = 80;
        }
        break;
    case "Varna":
        if (packet == "withBreakfast")
        {
            discount = 0.12;
            pricePerDay = 130;
        }
        else
        {
            discount = 0.07;
            pricePerDay = 100;
        }
        break;
    case "Burgas":
        if (packet == "withBreakfast")
        {
            discount = 0.12;
            pricePerDay = 130;
        }
        else
        {
            discount = 0.07;
            pricePerDay = 100;
        }
        break;
}
price = days * pricePerDay;
bool isValid = true;
if (vipDiscount == "yes")
{
    price *= 1 - discount;
}

if (days > 7 && vipDiscount == "no")
{
    price -= pricePerDay;
}
else if (days > 7)
{
    price -= pricePerDay * (1 - discount);
}

if (city != "Bansko" && city != "Borovets" && city != "Varna" && city != "Burgas")
{
    Console.WriteLine("Invalid input!");
    isValid = false;
}

else if (packet != "noEquipment" && packet != "withEquipment" && packet != "noBreakfast" && packet != "withBreakfast")
{
    Console.WriteLine("Invalid input!");
    isValid = false;
}

if (days < 1)
{
    Console.WriteLine("Days must be positive number!");
    isValid = false;
}

if (isValid)
{
    Console.WriteLine($"The price is {price:F2}lv! Have a nice time!");
}


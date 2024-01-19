string flowerType = Console.ReadLine();
int flowers = int.Parse(Console.ReadLine());
int budget = int.Parse(Console.ReadLine());
double price = 0;
if (flowerType == "Roses")
{
    price = flowers * 5;
    if (flowers > 80)
    {
        price *= 0.9;
    }
}
else if (flowerType == "Dahlias")
{
    price = flowers * 3.8;
    if (flowers > 90)
    {
        price *= 0.85;
    }
}
else if (flowerType == "Tulips")
{
    price = flowers * 2.8;
    if (flowers > 80)
    {
        price *= 0.85;
    }
}
else if (flowerType == "Narcissus")
{
    price = flowers * 3;
    if (flowers < 120)
    {
        price *= 1.15;
    }
}
else if (flowerType == "Gladiolus")
{
    price = flowers * 2.5;
    if (flowers < 80)
    {
        price *= 1.2;
    }
}
if (budget >= price)
{
    Console.WriteLine($"Hey, you have a great garden with {flowers} {flowerType} and {(budget - price):F2} leva left.");
}
else
{
    Console.WriteLine($"Not enough money, you need {(price - budget):F2} leva more.");
}

string projection = Console.ReadLine();
int rows = int.Parse(Console.ReadLine());
int columns = int.Parse(Console.ReadLine());
double price = 0;
if (projection == "Premiere")
{
    price = rows * columns * 12;
}
else if (projection == "Normal")
{
    price = rows * columns * 7.5;
}
else
{
    price = rows * columns * 5;
}
Console.WriteLine($"{price:F2} leva");

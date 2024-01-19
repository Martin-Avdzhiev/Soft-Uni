int width = int.Parse(Console.ReadLine());
int length = int.Parse(Console.ReadLine());
int height = int.Parse(Console.ReadLine());
int area = width * length * height;
string boxes = Console.ReadLine();
while (boxes != "Done")
{
    int numberBoxes = int.Parse(boxes);
    area -= numberBoxes;
    if (area <= 0)
    {
        break;
    }
    boxes = Console.ReadLine();
}
if (area <= 0)
{
Console.WriteLine($"No more free space! You need {area * -1} Cubic meters more.");
}
else
{
Console.WriteLine($"{area} Cubic meters left.");
}

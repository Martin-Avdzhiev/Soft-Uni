string figure = Console.ReadLine();
if (figure == "square")
{
    double side = double.Parse(Console.ReadLine());
    double area = side * side;
    Console.WriteLine($"{area:F3}");
}
else if (figure == "rectangle")
{
    double a = double.Parse(Console.ReadLine());
    double b = double.Parse(Console.ReadLine());
    double area = a * b;
    Console.WriteLine($"{area:F3}");
}
else if (figure == "circle")
{
    double radius = double.Parse(Console.ReadLine());
    double area = Math.PI * radius * radius;
    Console.WriteLine($"{area:F3}");
}
else if (figure == "triangle")
{
    double side = double.Parse(Console.ReadLine());
    double height = double.Parse(Console.ReadLine());
    double area = side * height / 2;
    Console.WriteLine($"{area:F3}");
}


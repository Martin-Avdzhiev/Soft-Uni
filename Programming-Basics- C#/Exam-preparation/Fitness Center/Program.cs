int people = int.Parse(Console.ReadLine());
int back = 0;
int chest = 0;
int legs = 0;
int abs = 0;
int proteinBar = 0;
int proteinShake = 0;
int training = 0;
int protein = 0;
for (int i = 0; i < people; i++)
{
    string input = Console.ReadLine();
    switch (input)
    {
        case "Back": back++; training++; break;
        case "Chest": chest++; training++; break;
        case "Legs": legs++; training++; break;
        case "Abs": abs++; training++; break;
        case "Protein shake": proteinShake++; protein++; break;
        case "Protein bar": proteinBar++; protein++; break;
    }
}

Console.WriteLine($"{back} - back");
Console.WriteLine($"{chest} - chest");
Console.WriteLine($"{legs} - legs");
Console.WriteLine($"{abs} - abs");
Console.WriteLine($"{proteinShake} - protein shake");
Console.WriteLine($"{proteinBar} - protein bar");

Console.WriteLine($"{(double)training / people * 100:f2}% - work out");
Console.WriteLine($"{(double)protein / people * 100:f2}% - protein");


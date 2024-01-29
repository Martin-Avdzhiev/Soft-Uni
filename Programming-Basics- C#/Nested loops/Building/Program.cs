int floors = int.Parse(Console.ReadLine());
int rooms = int.Parse(Console.ReadLine());

for (int i = floors; i >= 1; i--)
{
    string line = "";
    for (int j = 0; j < rooms; j++)
    {
        string type = "";
        if(i == floors)
        {
            type = "L";
        }
        else if (i % 2 == 0)
        {
            type = "O";
        }
        else 
        {
            type = "A";
        }
        line += $"{type}{i}{j} ";
    }
        Console.WriteLine(line);
}


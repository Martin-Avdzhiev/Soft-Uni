int power = int.Parse(Console.ReadLine());
int number = 1;
for (int i = 0; i<= power; i++)
{
    if(i % 2 == 0)
    {   
        Console.WriteLine(number);
    }
        number *=2;
}


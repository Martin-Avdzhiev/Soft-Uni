int first = int.Parse(Console.ReadLine());
int second = int.Parse(Console.ReadLine());
int third = int.Parse(Console.ReadLine());

for (int i = 1; i <= first; i++)
{
    if (i % 2 == 0)
    {
        for (int j = 1; j <= second; j++)
        {
            if (j < 2 || j > 7 || j == 4 || j == 6)
            {
            }
            else
            {
                for (int k = 1; k <= third; k++)
                {
                    if (k % 2 == 0)
                    {
                        Console.WriteLine($"{i} {j} {k}");
                    }
                }
            }

        }
    }
}


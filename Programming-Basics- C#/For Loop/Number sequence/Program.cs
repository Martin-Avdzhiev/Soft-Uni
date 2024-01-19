int max = -999999999;
int min = 999999999;
int numbers = int.Parse(Console.ReadLine());
for (int i = 1; i <= numbers; i++)
{
    int currentNumber = int.Parse(Console.ReadLine());
    if(currentNumber > max)
    {
        max = currentNumber;
    }
    if(currentNumber < min)
    {
        min = currentNumber;
    }
}
    Console.WriteLine($"Max number: {max}");
    Console.WriteLine($"Min number: {min}");

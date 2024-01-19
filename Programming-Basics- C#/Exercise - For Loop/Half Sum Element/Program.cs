int number = int.Parse(Console.ReadLine());
int max = -999999999;
int sum = 0;
for (int i = 1; i <= number; i++)
{
    int currentNumber = int.Parse(Console.ReadLine());
    if (currentNumber > max)
    {
        if (max != -999999999)
        {
            sum += max;
        }
        max = currentNumber;
    }
    else
    {
        sum += currentNumber;
    }
}
if (max == sum)
{
    Console.WriteLine("Yes");
    Console.WriteLine($"Sum = {sum}");
}
else
{
    Console.WriteLine("No");
    Console.WriteLine($"Diff = {(max > sum ? max - sum : sum - max)}");
}



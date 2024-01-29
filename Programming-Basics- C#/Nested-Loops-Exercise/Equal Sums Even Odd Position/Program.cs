int first = int.Parse(Console.ReadLine());
int second = int.Parse(Console.ReadLine());
string firstString = first.ToString();

for (int i = first; i <= second; i++)
{
    int firstSum = 0;
    int secondSum = 0;
    firstString = i.ToString();
    for (int j = 0; j < 6; j++)
    {
            char firstDigit = firstString[j];
            int numericValue = (int)char.GetNumericValue(firstDigit);
            if (j % 2 == 0)
            {
                firstSum += numericValue;
            }
            else
            {
                secondSum += numericValue;
            }
    }
    if (firstSum == secondSum)
    {
        Console.Write(i + " ");
    }
}
Console.WriteLine();

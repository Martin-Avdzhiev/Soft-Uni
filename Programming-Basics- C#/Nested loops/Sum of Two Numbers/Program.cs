int start = int.Parse(Console.ReadLine());
int end = int.Parse(Console.ReadLine());
int magicNumber = int.Parse(Console.ReadLine());
int combinations = 0;
bool isFound = false;
int firstNumber = 0;
int secondNumber = 0;
for (int i = start; i <= end; i++)
{
    for (int j = start; j <= end; j++)
    {
        combinations++;
        if(i + j == magicNumber)
        {
            isFound = true;
            firstNumber = i;
            secondNumber = j;
            break;
        }
    }
    if(isFound)
    {
        break;
    }
}
if(isFound)
{
Console.WriteLine($"Combination N:{combinations} ({firstNumber} + {secondNumber} = {firstNumber+secondNumber})");

}
else
{
Console.WriteLine($"{combinations} combinations - neither equals {magicNumber}");
}

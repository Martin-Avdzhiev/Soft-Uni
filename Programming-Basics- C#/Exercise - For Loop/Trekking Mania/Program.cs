int numbers = int.Parse(Console.ReadLine());
double groupA = 0;
double groupB = 0;
double groupC = 0;
double groupD = 0;
double groupE = 0;
double total = 0;
for (int i = 1; i<= numbers; i++)
{
    int currentNumber = int.Parse(Console.ReadLine());
    total += currentNumber;
    if(currentNumber < 6)
    {
        groupA+=currentNumber;
    }
    else if(currentNumber <13)
    {
        groupB+=currentNumber;
    }
    else if(currentNumber <26)
    {
        groupC+=currentNumber;
    }
    else if(currentNumber <41)
    {
        groupD+=currentNumber;
    }
    else 
    {
        groupE+=currentNumber;
    }
}


Console.WriteLine($"{(groupA == 0 ? 0.00 : (groupA/total) * 100):F2}%");
Console.WriteLine($"{(groupB == 0 ? 0.00 : (groupB/total) * 100):F2}%");
Console.WriteLine($"{(groupC == 0 ? 0.00 : (groupC/total) * 100):F2}%");
Console.WriteLine($"{(groupD == 0 ? 0.00 : (groupD/total) * 100):F2}%");
Console.WriteLine($"{(groupE == 0 ? 0.00 : (groupE/total) * 100):F2}%");




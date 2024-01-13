int numbers = int.Parse(Console.ReadLine());
double groupA = 0;
double groupB = 0;
double groupC = 0;
double groupD = 0;
double groupE = 0;
for (int i = 1; i<= numbers; i++)
{
    int currentNumber = int.Parse(Console.ReadLine());
    if(currentNumber < 200)
    {
        groupA++;
    }
    else if(currentNumber <400)
    {
        groupB++;
    }
    else if(currentNumber <600)
    {
        groupC++;
    }
    else if(currentNumber <800)
    {
        groupD++;
    }
    else
    {
        groupE++;
    }
}


Console.WriteLine($"{(groupA == 0 ? 0.00 : (groupA/numbers) * 100):F2}%");
Console.WriteLine($"{(groupB == 0 ? 0.00 : (groupB/numbers) * 100):F2}%");
Console.WriteLine($"{(groupC == 0 ? 0.00 : (groupC/numbers) * 100):F2}%");
Console.WriteLine($"{(groupD == 0 ? 0.00 : (groupD/numbers) * 100):F2}%");
Console.WriteLine($"{(groupE == 0 ? 0.00 : (groupE/numbers) * 100):F2}%");

int max = -999999999;
string number = Console.ReadLine();
while (number != "Stop")
{
    if(max < int.Parse(number))
    {
        max = int.Parse(number);
    }
    number = Console.ReadLine();
}
Console.WriteLine(max);

int min = 999999999;
string number = Console.ReadLine();
while (number != "Stop")
{
    if(min > int.Parse(number))
    {
        min = int.Parse(number);
    }
    number = Console.ReadLine();
}
Console.WriteLine(min);

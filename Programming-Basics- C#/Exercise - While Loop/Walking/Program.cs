string steps = Console.ReadLine();
int total = 0;
bool isSuccess = false;
while (true)
{
    if(steps == "Going home")
    {
        steps = Console.ReadLine();
        total += int.Parse(steps);
        if(total >= 10000)
        {
            isSuccess = true;
        }
        break;
    }
    total += int.Parse(steps);
    if(total >= 10000)
    {
        isSuccess = true;
        break;
    }
    steps = Console.ReadLine();
}

if(isSuccess)
{
Console.WriteLine("Goal reached! Good job!");
Console.WriteLine($"{total - 10000} steps over the goal!");
}
else
{
Console.WriteLine($"{10000 - total} more steps to reach goal.");
}

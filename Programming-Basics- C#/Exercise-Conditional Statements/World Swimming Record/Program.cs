double worldSeconds = double.Parse(Console.ReadLine());
double metres = double.Parse(Console.ReadLine());
double secondsPerOneMeter = double.Parse(Console.ReadLine());
double slowing = Math.Floor(metres/15) * 12.5;
double totalSeconds = metres * secondsPerOneMeter + slowing;
if (totalSeconds >= worldSeconds)
{
Console.WriteLine($"No, he failed! He was {totalSeconds - worldSeconds:F2} seconds slower.");
}
else
{
Console.WriteLine($"Yes, he succeeded! The new world record is {totalSeconds:F2} seconds.");
}


string name = Console.ReadLine();
int episodeTime = int.Parse(Console.ReadLine());
int freeTime = int.Parse(Console.ReadLine());
double lunchTime = freeTime * 0.125;
double relaxTime = freeTime * 0.25;
double isEnoughTime = freeTime - (lunchTime + relaxTime);
if (isEnoughTime >= episodeTime)
{
Console.WriteLine($"You have enough time to watch {name} and left with {Math.Ceiling(isEnoughTime - episodeTime)} minutes free time.");
}
else
{
Console.WriteLine($"You don't have enough time to watch {name}, you need {Math.Ceiling(episodeTime - isEnoughTime)} more minutes.");
}

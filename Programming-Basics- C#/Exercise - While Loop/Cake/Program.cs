int length = int.Parse(Console.ReadLine());
int width = int.Parse(Console.ReadLine());
int pieces = length * width;
while (pieces > 0)
{
    string cutPieces = Console.ReadLine();
    if(cutPieces == "STOP")
    {
        break;
    }
    pieces -= int.Parse(cutPieces);
}
if(pieces >= 0)
{
Console.WriteLine($"{pieces} pieces are left.");
}
else
{
Console.WriteLine($"No more cake left! You need {pieces * -1} pieces more.");
}

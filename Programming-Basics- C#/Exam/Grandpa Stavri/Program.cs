int days = int.Parse(Console.ReadLine());
double totalRakia = 0;
double totalDegrees = 0;

for(int i = 1; i<= days; i++)
{
    double currentRakia = double.Parse(Console.ReadLine());
    totalRakia += currentRakia;
    totalDegrees += double.Parse(Console.ReadLine()) * currentRakia;;
}


Console.WriteLine($"Liter: {totalRakia:f2}");
double average = totalDegrees / totalRakia;
Console.WriteLine($"Degrees: {average:f2}");
if(average < 38)
{
Console.WriteLine("Not good, you should baking!");
}
else if (average <= 42)
{
Console.WriteLine("Super!");
}
else
{
Console.WriteLine("Dilution with distilled water!");
}

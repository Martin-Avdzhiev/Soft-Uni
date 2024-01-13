int age = int.Parse(Console.ReadLine());
double laundryPrice = double.Parse(Console.ReadLine());
int toyPrice = int.Parse(Console.ReadLine());
int initialPrice = 9;
int budget = 0;
int toys = 0;
for(int i = 1; i<= age; i++)
{
    if(i% 2 == 0)
    {
        budget += initialPrice;
        initialPrice += 10;
    }
    else
    {
        toys++;
    }
}
budget+= toys * toyPrice;
if(budget >= laundryPrice)
{
Console.WriteLine($"Yes! {(budget - laundryPrice):F2}");
}
else
{
Console.WriteLine($"No! {(laundryPrice - budget):F2}");
}

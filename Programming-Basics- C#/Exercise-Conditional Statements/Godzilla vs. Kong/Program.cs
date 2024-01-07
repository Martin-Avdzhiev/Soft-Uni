double budget = double.Parse(Console.ReadLine());
int statists = int.Parse(Console.ReadLine());
double pricePerOneStatist = double.Parse(Console.ReadLine());
double decor = budget * 0.1;
double suitsPrice = statists * pricePerOneStatist;
if(statists > 150)
{
    suitsPrice *= 0.9;
}
double totalExpenses = decor + suitsPrice;
if(budget >= totalExpenses)
{
Console.WriteLine("Action!");
Console.WriteLine($"Wingard starts filming with {(budget - totalExpenses):F2} leva left.");
}
else 
{
Console.WriteLine("Not enough money!");
Console.WriteLine($"Wingard needs {(totalExpenses - budget):F2} leva more.");
}

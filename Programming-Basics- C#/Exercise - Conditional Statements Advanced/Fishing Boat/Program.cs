int budget = int.Parse(Console.ReadLine());
string season = Console.ReadLine();
int fishermans = int.Parse(Console.ReadLine());
double price = 0;
bool isAutumn = false;
if(season == "Spring")
{
    price = 3000;
}
else if(season == "Summer")
{
    price = 4200;
}
else if(season == "Autumn")
{
    price = 4200;
    isAutumn = true;
}
else if(season == "Winter")
{
    price = 2600;
}
if(fishermans <= 6)
{
    price *= 0.9;
}
else if(fishermans<=11)
{
    price *= 0.85;
}
else
{
    price *= 0.75;
}
if(!isAutumn && fishermans % 2 == 0)
{
    price *= 0.95;
}
if(budget >= price)
{
Console.WriteLine($"Yes! You have {(budget - price):F2} leva left.");
}
else
{
Console.WriteLine($"Not enough money! You need {(price - budget):F2} leva.");
}

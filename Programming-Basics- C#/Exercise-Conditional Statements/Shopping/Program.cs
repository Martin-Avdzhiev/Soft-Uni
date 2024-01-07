double budget = double.Parse(Console.ReadLine());
int videocards = int.Parse(Console.ReadLine());
int cpus = int.Parse(Console.ReadLine());
int rams = int.Parse(Console.ReadLine());
int videocardsPrice = videocards * 250;
double cpusPrice = (videocardsPrice * 0.35) * cpus;
double ramsPrice = (videocardsPrice * 0.1) * rams;
double total = videocardsPrice + cpusPrice + ramsPrice;
if (videocards > cpus)
{  
   total *= 0.85; 
}
if (budget >= total)
{
Console.WriteLine($"You have {(budget - total):F2} leva left!");
}
else
{
Console.WriteLine($"Not enough money! You need {(total - budget):F2} leva more!");
}
int chickens = int.Parse(Console.ReadLine());
int fishes = int.Parse(Console.ReadLine());
int vegans = int.Parse(Console.ReadLine());
double menusSum = chickens * 10.35 + fishes * 12.4 + vegans * 8.15;
double sum = menusSum + menusSum * 0.2 + 2.5;
Console.WriteLine(sum);

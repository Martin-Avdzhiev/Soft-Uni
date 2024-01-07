int nylon = int.Parse(Console.ReadLine()) + 2;
double paint = double.Parse(Console.ReadLine()) * 1.1;
int water = int.Parse(Console.ReadLine());
int workingHours = int.Parse(Console.ReadLine());
double expenses = nylon * 1.5 + paint * 14.5 + water * 5 + 0.4;
double total = (expenses * 0.3) * workingHours + expenses;
Console.WriteLine(total);

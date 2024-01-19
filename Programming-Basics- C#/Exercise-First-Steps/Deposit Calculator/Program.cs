double deposit = double.Parse(Console.ReadLine());
int months = int.Parse(Console.ReadLine());
double interest = double.Parse(Console.ReadLine()) /100;
double sum = deposit + months * ((deposit * interest) / 12);
Console.WriteLine(sum);

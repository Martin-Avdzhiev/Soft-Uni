int pencils = int.Parse(Console.ReadLine());
int markers = int.Parse(Console.ReadLine());
int litres = int.Parse(Console.ReadLine());
double discount = double.Parse(Console.ReadLine()) / 100;
double sum = (pencils * 5.8 + markers * 7.2 + litres * 1.2) * (1 - discount);
Console.WriteLine(sum);

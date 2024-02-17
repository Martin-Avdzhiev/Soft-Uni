double cpuPrice = double.Parse(Console.ReadLine());
double gpuPrice = double.Parse(Console.ReadLine());
double ramPrice = double.Parse(Console.ReadLine());
int ram = int.Parse(Console.ReadLine());
double discount = double.Parse(Console.ReadLine());
double total = (cpuPrice * 1.57) * (1 - discount);
total += (gpuPrice * 1.57) * (1 - discount);
total += ram * ramPrice * 1.57;

Console.WriteLine($"Money needed - {total:f2} leva.");

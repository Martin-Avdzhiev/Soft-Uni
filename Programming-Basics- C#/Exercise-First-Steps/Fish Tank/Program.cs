int length = int.Parse(Console.ReadLine());
int width = int.Parse(Console.ReadLine());
int height = int.Parse(Console.ReadLine());
double percent = double.Parse(Console.ReadLine()) / 100;
double aquariumVolume = length * height * width;
double litresVolume = aquariumVolume / 1000;
double neededWater = litresVolume * (1-percent);
Console.WriteLine(neededWater);

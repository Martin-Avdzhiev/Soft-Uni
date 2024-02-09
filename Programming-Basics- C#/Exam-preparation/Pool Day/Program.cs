int people = int.Parse(Console.ReadLine());
double tax = double.Parse(Console.ReadLine());
double priceBed = double.Parse(Console.ReadLine());
double priceUmbrella = double.Parse(Console.ReadLine());
int umbrellas = (int)Math.Ceiling(people * 1.0 / 2);
int beds = (int)Math.Ceiling(people * 0.75);
double total = people * tax + priceBed * beds + priceUmbrella * umbrellas;
Console.WriteLine($"{total:F2} lv.");

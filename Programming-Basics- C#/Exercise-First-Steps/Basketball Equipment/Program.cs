int yearlyPrice = int.Parse(Console.ReadLine());
double shoes = yearlyPrice * 0.6;
double suit = shoes * 0.8;
double ball = suit * 0.25;
double accessories = ball * 0.2;
Console.WriteLine(yearlyPrice + shoes + suit + ball + accessories);


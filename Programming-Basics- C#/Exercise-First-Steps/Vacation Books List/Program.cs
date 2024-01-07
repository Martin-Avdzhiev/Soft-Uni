int sheets = int.Parse(Console.ReadLine());
int sheetsPerHour = int.Parse(Console.ReadLine());
int days = int.Parse(Console.ReadLine());
int readingHoursPerDay = (sheets / sheetsPerHour) / days;
Console.WriteLine(readingHoursPerDay);

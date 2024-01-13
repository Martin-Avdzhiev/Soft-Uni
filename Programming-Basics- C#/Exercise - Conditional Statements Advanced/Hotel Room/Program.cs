string month = Console.ReadLine();
int nights = int.Parse(Console.ReadLine());
double studioPrice = 0;
double apartmentPrice = 0;
if(month == "May" || month == "October")
{
    studioPrice = nights * 50;
    apartmentPrice = nights * 65;
    if(nights > 7 && nights <= 14)
    {
        studioPrice *= 0.95;
    }
    else if(nights > 14)
    {
        studioPrice *= 0.7;
    }
}
else if(month == "June" || month == "September")
{
    studioPrice = nights * 75.2;
    apartmentPrice = nights * 68.7;
    if(nights > 14)
    {
        studioPrice *= 0.8;
    }
}
else
{
    studioPrice = nights * 76;
    apartmentPrice = nights * 77;
}
if(nights > 14)
{
    apartmentPrice *= 0.9;
}
Console.WriteLine($"Apartment: {apartmentPrice:F2} lv.");
Console.WriteLine($"Studio: {studioPrice:F2} lv.");

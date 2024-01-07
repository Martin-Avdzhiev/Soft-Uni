int hours = int.Parse(Console.ReadLine());
int minutes = int.Parse(Console.ReadLine());
if (minutes + 15 >= 60)
{
    hours += 1;
    minutes -= 45;
}
else 
{
    minutes += 15;
}
if (hours > 23)
{
    hours = 0;
}
if (minutes < 10){
Console.WriteLine($"{hours}:0{minutes}");
}
else {
Console.WriteLine($"{hours}:{minutes}");
}


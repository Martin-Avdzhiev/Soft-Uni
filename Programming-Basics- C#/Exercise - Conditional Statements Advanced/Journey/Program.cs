double budget = double.Parse(Console.ReadLine());
string season = Console.ReadLine();
string place = "";
string type = "";
if (budget <= 100)
{
    if (season == "summer")
    {
        budget *= 0.3;
    }
    else
    {
        budget *= 0.7;
    }
    place = "Bulgaria";
}
else if (budget <= 1000)
{
        if (season == "summer")
    {
        budget *= 0.4;
    }
    else
    {
        budget *= 0.8;
    }
    place = "Balkans";
}
else{
    budget *= 0.9;
    place = "Europe";
}
if (season == "summer" && place != "Europe")
{
    type = "Camp";
}
else
{
    type = "Hotel";
}
Console.WriteLine($"Somewhere in {place}");
Console.WriteLine($"{type} - {budget:F2}");

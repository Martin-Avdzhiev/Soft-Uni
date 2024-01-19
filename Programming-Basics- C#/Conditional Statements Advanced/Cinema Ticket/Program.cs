string day = Console.ReadLine();
if (day == "Monday" || day == "Tuesday" || day == "Friday")
{
    Console.WriteLine(12);
}
else if (day == "Wednesday" || day == "Thursday")
{
    Console.WriteLine(14);
}
else
{
    Console.WriteLine(16);
}


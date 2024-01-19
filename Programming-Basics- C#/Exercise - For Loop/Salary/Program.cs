int tabs = int.Parse(Console.ReadLine());
int salary = int.Parse(Console.ReadLine());
for (int i = 1; i <= tabs; i++)
{
    string site = Console.ReadLine();
    if(site == "Facebook")
    {
        salary -= 150;
    }
    else if(site == "Instagram")
    {
        salary -= 100;
    }
    else if(site == "Reddit")
    {
        salary -= 50;
    }
}
if(salary > 0)
{
    Console.WriteLine(salary);
}
else
{
    Console.WriteLine("You have lost your salary.");
}

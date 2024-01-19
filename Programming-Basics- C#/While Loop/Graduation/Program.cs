string name = Console.ReadLine();
double grade = double.Parse(Console.ReadLine());
int reachedClass = 0;
int fails = 0;
double total = 0;
while (reachedClass < 12)
{
    if (grade < 4)
    {
        fails++;
    }
    if(fails == 2)
    {
        break;
    }
    total += grade;
    reachedClass++;
    if (reachedClass == 12)
    {
        break;
    }
    grade = double.Parse(Console.ReadLine());

}
if (fails == 2)
{
    Console.WriteLine($"{name} has been excluded at {reachedClass} grade");
}
else
{
    Console.WriteLine($"{name} graduated. Average grade: {(total/12):F2}");
}


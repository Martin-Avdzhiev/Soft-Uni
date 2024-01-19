int maxDownGrades = int.Parse(Console.ReadLine());
string taskName = Console.ReadLine();
double totalTasks = 0;
double totalScore = 0;
string lastTask = "";
int fails = 0;
while (taskName != "Enough")
{
    int grade = int.Parse(Console.ReadLine());
    lastTask = taskName;
    totalTasks++;
    totalScore += grade;
    if (grade <= 4)
    {
        fails ++;
    }
    if (fails == maxDownGrades)
    {
        break;
    }
    taskName = Console.ReadLine();
}
if(fails == maxDownGrades)
{
Console.WriteLine($"You need a break, {fails} poor grades.");
}
else
{
Console.WriteLine($"Average score: {(totalScore / totalTasks):F2}");
Console.WriteLine($"Number of problems: {totalTasks}");
Console.WriteLine($"Last problem: {lastTask}");
}

int juries = int.Parse(Console.ReadLine());
string name = Console.ReadLine();
double sum = 0;
double grades = 0;
double totalGrades = 0;
while (name != "Finish")
{
    double currentSum = 0;
    while (true)
    {
        string input = Console.ReadLine();
        if (double.TryParse(input, out _))
        {
            double currentGrade = double.Parse(input);//6
            currentSum += currentGrade; //6
            sum += currentGrade;
            grades++;//1
            totalGrades++;//1
        }
        else
        {
            Console.WriteLine($"{name} - {(currentSum / grades):F2}.");
            name = input;
            grades = 0;
            break;
        }

    }
}

Console.WriteLine($"Student's final assessment is {(sum/totalGrades):F2}.");

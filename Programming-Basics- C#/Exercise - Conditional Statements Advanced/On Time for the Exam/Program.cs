int examHour = int.Parse(Console.ReadLine());//11
int examMinute = int.Parse(Console.ReadLine());//30
int onTimeHour = int.Parse(Console.ReadLine());//12
int onTimeMinute = int.Parse(Console.ReadLine());//29
int differenceMinutes = 0;
bool isLate = false;
bool isOntime = false;
bool isEarly = false;
double hours = 0;
double minutes = 0;
if (examHour > onTimeHour)
{
    differenceMinutes = (examHour - onTimeHour) * 60;
    if (examMinute > onTimeMinute)
    {
        differenceMinutes += examMinute - onTimeMinute;
    }
    else
    {
        differenceMinutes += examMinute - onTimeMinute;
    }
    if (differenceMinutes > 30)
    {
        isEarly = true;
    }
    else
    {
        isOntime = true;
    }
}
else if (examHour == onTimeHour)
{
    if (examMinute > onTimeMinute)
    {
        differenceMinutes += examMinute - onTimeMinute;
        if (differenceMinutes > 30)
        {
            isEarly = true;
        }
        else
        {
            isOntime = true;
        }
    }
    else
    {
        differenceMinutes += (examMinute - onTimeMinute) * -1;
        if (differenceMinutes > 0)
        {
            isLate = true;
        }
        else
        {
            isOntime = true;
        }
    }
}
else
{
    differenceMinutes = ((examHour - onTimeHour) * 60) * -1;
    if (examMinute > onTimeMinute)
    {
        differenceMinutes += (examMinute - onTimeMinute) * -1;
    }
    else
    {
        differenceMinutes += (examMinute - onTimeMinute) * -1;
    }
    isLate = true;
}
    hours = Math.Floor(differenceMinutes / 60.0);
    minutes = differenceMinutes % 60;
if (differenceMinutes == 0)
{
    Console.WriteLine("On time");
}
else if (isEarly)
{
    Console.WriteLine("Early");
    if (differenceMinutes >= 60)
    {
        if (minutes < 10)
        {
            Console.WriteLine($"{hours:F0}:0{minutes:F0} hours before the start");
        }
        else
        {
            Console.WriteLine($"{hours:F0}:{minutes:F0} hours before the start");
        }
    }
    else
    {
        Console.WriteLine($"{differenceMinutes:F0} minutes before the start");
    }
}
else if (isOntime)
{
    Console.WriteLine("On time");
    if (differenceMinutes >= 60)
    {
        if (minutes < 10)
        {
            Console.WriteLine($"{hours:F0}:0{minutes:F0} hours before the start");
        }
        else
        {
            Console.WriteLine($"{hours:F0}:{minutes:F0} hours before the start");
        }
    }
    else
    {
        Console.WriteLine($"{differenceMinutes:F0} minutes before the start");
    }
}
else if(isLate)
{
    Console.WriteLine("Late");
    if (differenceMinutes >= 60)
    {
        if (minutes < 10)
        {
            Console.WriteLine($"{hours:F0}:0{minutes:F0} hours after the start");
        }
        else
        {
            Console.WriteLine($"{hours:F0}:{minutes:F0} hours after the start");
        }
    }
    else
    {
        Console.WriteLine($"{differenceMinutes:F0} minutes after the start");
    }
}


string city = Console.ReadLine();
double sales = double.Parse(Console.ReadLine());
double commision = 0;
switch (city)
{
    case "Sofia":
        if (sales >= 0 && sales <= 500)
        {
            commision = sales * 0.05;
        }
        else if (sales > 500 && sales <= 1000)
        {
            commision = sales * 0.07;
        }
        else if (sales > 1000 && sales <= 10000)
        {
            commision = sales * 0.08;
        }
        else if (sales > 10000)
        {
            commision = sales * 0.12;
        }
        else
        {
            Console.WriteLine("error");
            return;
        }
        break;
    case "Varna":
        if (sales >= 0 && sales <= 500)
        {
            commision = sales * 0.045;
        }
        else if (sales > 500 && sales <= 1000)
        {
            commision = sales * 0.075;
        }
        else if (sales > 1000 && sales <= 10000)
        {
            commision = sales * 0.1;
        }
        else if (sales > 10000)
        {
            commision = sales * 0.13;
        }
        else
        {
            Console.WriteLine("error");
            return;
        }
        break;
    case "Plovdiv":
        if (sales >= 0 && sales <= 500)
        {
            commision = sales * 0.055;
        }
        else if (sales > 500 && sales <= 1000)
        {
            commision = sales * 0.08;
        }
        else if (sales > 1000 && sales <= 10000)
        {
            commision = sales * 0.12;
        }
        else if (sales > 10000)
        {
            commision = sales * 0.145;
        }
        else
        {
            Console.WriteLine("error");
            return;
        }
        break;
    default:
        Console.WriteLine("error");
        return;
}

Console.WriteLine($"{commision:F2}");

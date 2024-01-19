double firstNumber = double.Parse(Console.ReadLine());
double secondNumber = double.Parse(Console.ReadLine());
char symbol = char.Parse(Console.ReadLine());
string oddOrEven = "";
if (symbol == '+')
{
    oddOrEven = (firstNumber + secondNumber) % 2 == 0 ? "even" : "odd";
    Console.WriteLine($"{firstNumber} + {secondNumber} = {firstNumber + secondNumber} - {oddOrEven}");
}
else if (symbol == '-')
{
    oddOrEven = (firstNumber - secondNumber) % 2 == 0 ? "even" : "odd";
    Console.WriteLine($"{firstNumber} - {secondNumber} = {firstNumber - secondNumber} - {oddOrEven}");
}
else if (symbol == '*')
{
    oddOrEven = (firstNumber * secondNumber) % 2 == 0 ? "even" : "odd";
    Console.WriteLine($"{firstNumber} * {secondNumber} = {firstNumber * secondNumber} - {oddOrEven}");
}
else if (symbol == '/')
{
    if (secondNumber == 0)
    {
        Console.WriteLine($"Cannot divide {firstNumber} by zero");
    }
    else
    {
        Console.WriteLine($"{firstNumber} / {secondNumber} = {(firstNumber / secondNumber):F2}");
    }
}
else if (symbol == '%')
{
    if(secondNumber == 0)
    {
        Console.WriteLine($"Cannot divide {firstNumber} by zero");
    }
    else
    {
    Console.WriteLine($"{firstNumber} % {secondNumber} = {firstNumber % secondNumber}");
    }
}


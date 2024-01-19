double numbers = double.Parse(Console.ReadLine());
int left = 0;
int right = 0;
for (double i = 1; i <= numbers*2; i++)
{
    int currentNumber = int.Parse(Console.ReadLine());
    if (i <= numbers)
    {
        left += currentNumber;
    }
    else{
        right += currentNumber;
    }

}
if(left == right)
{
    Console.WriteLine($"Yes, sum = {left}");
}
else 
{
   Console.WriteLine($"No, diff = {(left > right ? left - right : right - left)}");
}


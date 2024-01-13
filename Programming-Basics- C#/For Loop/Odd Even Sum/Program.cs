int numbers = int.Parse(Console.ReadLine());
int even = 0;
int odd = 0;
for (double i = 1; i <= numbers; i++)
{
    int currentNumber = int.Parse(Console.ReadLine());
    if (i % 2 == 0)
    {
        even += currentNumber;
    }
    else{
        odd += currentNumber;
    }

}
if(even == odd)
{
    Console.WriteLine($"Yes");
    Console.WriteLine($"Sum = {even}");
}
else 
{
   Console.WriteLine($"No");
   Console.WriteLine($"Diff = {(even > odd ? even - odd : odd - even)}");
}

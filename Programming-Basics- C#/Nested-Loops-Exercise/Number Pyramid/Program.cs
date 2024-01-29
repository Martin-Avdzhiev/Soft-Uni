int number = int.Parse(Console.ReadLine());
int current = 1;
bool isBigger = false;
for (int i = 1; i <= number ; i++){
    for (int j = 0; j < i; j++)
    {
        if(current > number)
        {
            isBigger = true;
            break;
        }
        Console.Write(current + " ");
        current++;
    }
    if (isBigger)
    {
        break;
    }
    Console.WriteLine();

}

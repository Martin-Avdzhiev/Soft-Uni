int number = int.Parse(Console.ReadLine());
int start = 1111;
int end = 9999;
string result = "";
for (int i = start; i <= end; i++)
{
    bool isSpecial = true;
    string currentNumber = i.ToString();
    for (int j = 0; j < 4; j++)
    {
        double numericValue = char.GetNumericValue(currentNumber[j]);
        int numberOnCurrentIndex = (int)numericValue;
        if (numberOnCurrentIndex != 0)
        {
            if (number % numberOnCurrentIndex != 0)
            {
                isSpecial = false;
            }
        }
        else
        {
            isSpecial = false;
        }
    }
    if (isSpecial)
    {
        result += currentNumber + " ";
    }
}
Console.WriteLine(result);

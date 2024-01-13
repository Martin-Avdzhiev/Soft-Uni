string word = Console.ReadLine();
int result = 0;
for (int i = 0; i < word.Length; i++)
{
    if (word[i] == 'a')
    {
        result += 1;
    }
    else if (word[i] == 'e')
    {
        result += 2;
    }
    else if (word[i] == 'i')
    {
        result += 3;
    }
    else if (word[i] == 'o')
    {
        result += 4;
    }
    else if (word[i] == 'u')
    {
        result += 5;
    }
}
    Console.WriteLine(result);


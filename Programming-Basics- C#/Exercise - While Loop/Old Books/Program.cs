string searchedBook = Console.ReadLine();
int checkedBooks = 0;
string currentBook = Console.ReadLine();
bool isFound = false;
while (currentBook != "No More Books")
{
    if (searchedBook != currentBook)
    {
        checkedBooks++;
    }
    else 
    {
        isFound = true;
        break;
    }
    currentBook = Console.ReadLine();
} 
if (isFound)
{
Console.WriteLine($"You checked {checkedBooks} books and found it.");
}
else
{
Console.WriteLine($"The book you search is not here!");
Console.WriteLine($"You checked {checkedBooks} books.");
}

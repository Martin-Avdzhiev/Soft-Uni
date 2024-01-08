double age = double.Parse(Console.ReadLine());
char gender = char.Parse(Console.ReadLine());
string result = "";
if(age >= 16 && gender == 'm')
{
    result = "Mr.";
}
else if (age < 16 && gender == 'm')
{
    result = "Master";
}
else if (age >= 16 && gender == 'f')
{
    result = "Ms.";
}
else {
    result = "Miss";
}
Console.WriteLine(result);

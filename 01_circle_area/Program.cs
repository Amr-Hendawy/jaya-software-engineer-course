using System;

class Program
{
    static double CircleArea(double r)
    {
        const double PI = Math.PI;
        double area = PI * r * r;
        return area;
    }

    static void Main()
    {
        Console.WriteLine(CircleArea(5));
        Console.WriteLine(CircleArea(10));
        Console.WriteLine(CircleArea(15));
    }
}
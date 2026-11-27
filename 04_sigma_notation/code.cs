
using System;

class Program
{
    static void Main()
    {
        double[] x;
        int n;
        double ave = 0;
        double a = 0;
        double b;
        double sd;

        Console.Write("How many items? ");
        n = int.Parse(Console.ReadLine());

        x = new double[n];

        // Get numbers and calculate average
        for (int i = 0; i < n; i++)
        {
            Console.Write("Give me the number: ");
            x[i] = double.Parse(Console.ReadLine());

            ave += x[i];
        }

        ave /= n;

        Console.WriteLine("Average = " + ave);

        // Calculate squared differences
        for (int j = 0; j < n; j++)
        {
            a += Math.Pow(x[j] - ave, 2);

            Console.WriteLine("A = " + a);
        }

        // Calculate variance
        b = a / n;

        // Calculate standard deviation
        sd = Math.Sqrt(b);

        Console.WriteLine("Standard Deviation = " + sd);
    }
}

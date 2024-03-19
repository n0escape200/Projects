using System;
using Car;
using Truck;
using Motorcycle;
using Repository;

namespace Project_PIU
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Base class values
            string brand, model, year, condition;
            int km, price;

            //Car values
            int nrDoors, cp;
            string body;

            //Truck values
            int cargo, tow;

            //Motorcycle values 
            int cc;
            string type;

            Console.WriteLine("Brand:");
            brand = Console.ReadLine();

            Console.WriteLine("Model:");
            model = Console.ReadLine();

            Console.WriteLine("Year:");
            year = Console.ReadLine();

            Console.WriteLine("Condition:");
            condition = Console.ReadLine();

            Console.WriteLine("Km:");
            km = Int32.Parse(Console.ReadLine());

            Console.WriteLine("Price:");
            price = Int32.Parse(Console.ReadLine());

            Console.WriteLine("Type:");
            type = Console.ReadLine();

            Console.WriteLine("Number of doors:");
            nrDoors = Int32.Parse(Console.ReadLine());

            Console.WriteLine("Horse power:");
            cp = Int32.Parse(Console.ReadLine());

            Console.WriteLine("Body chassis:");
            body = Console.ReadLine();

            Console.ReadKey(); // return 0;
        }
    }
}

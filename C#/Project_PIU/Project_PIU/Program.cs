using System;
using Car;
using Truck;
using Motorcycle;
using Repository;
using System.Collections.Generic;
using Vehicle;

namespace Project_PIU
{
    internal class Program
    {
        static void printMenu()
        {
            Console.WriteLine("C)Add a vehicle");
        }

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

            RepositoryClass repository = new RepositoryClass();

            string opr = String.Empty;

            do
            {
                Console.Clear();
                printMenu();
                Console.WriteLine(">>>"); opr = Console.ReadLine().ToUpper();

                switch(opr)
                {
                    case "C":
                        {
                            
                            Console.WriteLine("Type of vehicle:");
                            string vehicle = Console.ReadLine().ToUpper();
                            if(vehicle == "CAR" || vehicle == "TRUCK" || vehicle == "MOTORCYCLE")
                            {
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

                                switch (vehicle)
                                {
                                    case "CAR":
                                        {
                                            Console.WriteLine("Number of doors:");
                                            nrDoors = Int32.Parse(Console.ReadLine());
                                            Console.WriteLine("\n");

                                            Console.WriteLine("Engine horse power:");
                                            cp = Int32.Parse(Console.ReadLine());
                                            Console.WriteLine("\n");

                                            Console.WriteLine("Body type:");
                                            body = Console.ReadLine();
                                            Console.WriteLine("\n");

                                            repository.Add(new CarClass(brand, model, year, km, price, condition, nrDoors, cp, body));
                                        }
                                        break;
                                    case "TRUCK":
                                        {
                                            Console.WriteLine("Cargo capacity:");
                                            cargo = Int32.Parse(Console.ReadLine());
                                            Console.WriteLine("\n");

                                            Console.WriteLine("Tow capacity:");
                                            tow = Int32.Parse(Console.ReadLine());
                                            Console.WriteLine("\n");
                                            repository.Add(new TruckClass(brand, model, year, km, price, condition, cargo, tow));
                                        }
                                        break;
                                    case "MOTORCYCLE":
                                        {
                                            Console.WriteLine("Cylinder capacity:");
                                            cc = Int32.Parse(Console.ReadLine());
                                            Console.WriteLine("\n");

                                            Console.WriteLine("Motorcycle type:");
                                            type = Console.ReadLine();
                                            Console.WriteLine("\n");
                                            repository.Add(new MotorcycleClass(brand, model, year, km, price, condition, cc, type));
                                        }
                                        break;
                                }
                            }
                            else
                            {
                                Console.WriteLine("Type unknown...");
                            }
                        }
                        break;

                    case "R":
                        {
                            List<VehicleClass> list =  repository.GetAll();
                            for(int i = 0; i < list.Count; i++)
                            {
                                Console.WriteLine($"#{i + 1}");
                                Console.WriteLine(list[i].Info());
                            }
                        }
                        break;

                    default:
                        Console.WriteLine("Option unknown");
                        break;
                }

                Console.WriteLine("Press any key ...");
                Console.ReadKey();

            } while (opr != "S");

            Console.ReadKey(); // return 0;
        }
    }
}

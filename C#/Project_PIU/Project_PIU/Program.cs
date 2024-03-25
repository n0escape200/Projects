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
            Console.WriteLine("1)Add a vehicle");
            Console.WriteLine("2)Read all the data");
            Console.WriteLine("3)Read vehicle with id");
            Console.WriteLine("4)Delete vehicle with id ");
            Console.WriteLine("5)Add vehicle by id");
            Console.WriteLine("6)Add data from repo to file");
            Console.WriteLine("7)Add data from .txt to repository");

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

            if(repository.ok == 1)
            {
                do
                {
                    Console.Clear();
                    printMenu();
                    Console.WriteLine(">>>"); opr = Console.ReadLine().ToUpper();

                    switch (opr)
                    {
                        case "1":
                            {

                                Console.WriteLine("Type of vehicle: (Car)(Truck)(Motorcycle)");
                                string vehicle = Console.ReadLine().ToUpper();
                                if (vehicle == "CAR" || vehicle == "TRUCK" || vehicle == "MOTORCYCLE")
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

                        case "2":
                            {
                                List<VehicleClass> list = repository.GetAll();
                                if (list.Count != 0)
                                {
                                    for (int i = 0; i < list.Count; i++)
                                    {
                                        Console.WriteLine(list[i].Info());
                                    }
                                }
                                else
                                {
                                    Console.WriteLine("Repository is empty");
                                }
                            }
                            break;

                        case "3":
                            {
                                int id;
                                Console.WriteLine("Get the vehicle at Id:");
                                id = Int32.Parse(Console.ReadLine());
                                VehicleClass aux = repository.GetById(id);
                                if (aux.Type == "undefined")
                                {
                                    Console.WriteLine($"Vehicle with id:{id} doesn't exist");
                                }
                                else
                                {
                                    Console.WriteLine(aux.Info());
                                }
                            }
                            break;
                        case "4":
                            {
                                int id;
                                Console.WriteLine("Delete the vehicle at Id:");
                                id = Int32.Parse(Console.ReadLine());
                                repository.DeleteById(id);
                            }
                            break;
                        case "5":
                            {
                                int id;
                                Console.WriteLine("Add the vehicle at Id in .txt:");
                                id = Int32.Parse(Console.ReadLine());
                                repository.AddByIdToFile(id);
                            }
                            break;
                        case "6":
                            {
                                if (repository.GetSize() != 0)
                                {
                                    repository.AddRepoToFile();
                                }
                                else
                                {
                                    Console.WriteLine("Repository is empty");
                                }
                            }
                            break;
                        case "7":
                            {
                                repository.GetDataFromFile();
                            }
                            break;
                        default:
                            Console.WriteLine("Option unknown");
                            break;
                    }

                    Console.WriteLine("Press any key ...");
                    Console.ReadKey();

                } while (opr != "S");
            }

            Console.ReadKey(); // return 0;
        }
    }
}

using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Remoting.Messaging;
using Vehicle;

namespace Repository
{
    public class RepositoryClass : VehicleClass
    {
        List<VehicleClass> repository;
        public int ok = 1;

        StreamReader reader;
        StreamWriter writer;

        string filename = "C:\\Users\\n0_es\\Desktop\\Projects\\C#\\Project_PIU\\Repository\\Data.txt";

        public RepositoryClass()
        {
            if(File.Exists(filename))
            {
                repository = new List<VehicleClass>();
            }
            else
            {
                Console.WriteLine("FILE NOT OPENED!!!");
                ok = 0;
            }
            
        }

        public int GetSize()
        {
            return repository.Count;
        }

        public void Add(VehicleClass v)
        {
            repository.Add(v);
        }

        public List<VehicleClass> GetAll()
        {
            return repository;
        }

        public VehicleClass GetById(int id)
        {
            for (int i = 0; i < repository.Count; i++)
            {
                if (repository[i].Id == id)
                {
                    return repository[i];
                }
            }

            return new VehicleClass();
        }

        public void UpdateByIndex(int index, VehicleClass v)
        {
            repository[index] = v;
        }

        public bool DeleteById(int id)
        {
            for (int i = 0; i < repository.Count; i++)
            {
                if (repository[i].Id == id)
                {                 
                    repository.RemoveAt(i);
                    return true;
                }
            }
            return false;
        }

        public bool AddByIdToFile(int id)
        {
            VehicleClass vehicle = GetById(id);
            if (vehicle.Id != -1)
            {
                using(StreamWriter sw = new StreamWriter(filename))
                {
                    sw.WriteLine(vehicle.FormatDataForFileSave());
                    sw.Close();
                    return true;
                }
            }
            return false;
        }

        public void AddRepoToFile()
        {
            using(StreamWriter sw = new StreamWriter(filename, true))
            {
                foreach (VehicleClass v in repository)
                {
                    sw.WriteLine(v.FormatDataForFileSave());
                }
                sw.Close();
            }
        }

        public bool GetDataFromFile()
        {
            string linie;
            char separator = '_';
            using(StreamReader sr = new StreamReader(filename))
            {
                
                while((linie = sr.ReadLine()) != null)
                {
                    string[] aux = linie.Split(separator);
                    VehicleClass v = new VehicleClass(long.Parse(aux[1]),
                                                      aux[2], aux[3],
                                                      aux[4], Int32.Parse(aux[5]), 
                                                      Int32.Parse(aux[6]), aux[7], aux[8]);
                    Add(v);
                }
                sr.Close();
            }
            return true;
        }
    }
}

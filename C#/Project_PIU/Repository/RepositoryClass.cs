using System;
using System.Collections.Generic;
using Vehicle;

namespace Repository
{
    public class RepositoryClass : VehicleClass
    {
        List<VehicleClass> repository;

        public RepositoryClass()
        {
            repository = new List<VehicleClass>();
        }

        public void Add(VehicleClass v)
        {
            repository.Add(v);
        }

        public List<VehicleClass> GetAll()
        {
            return repository;
        }

        public VehicleClass GetByIndex(int index)
        {
            return repository[index];
        }

        public void UpdateByIndex(int index, VehicleClass v)
        {
            repository[index] = v;
            Console.WriteLine("Updated!\n");
        }

        public void DeleteByIndex(int index)
        {
            repository.RemoveAt(index);
            Console.WriteLine("Deleted!\n");
        }
    }
}

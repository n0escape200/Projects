using System;
using System.Collections.Generic;
using Vehicle;

namespace Repository
{
    internal class RepositoryClass:VehicleClass
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

        public void GetAll()
        {
            foreach (VehicleClass v in repository)
            {
                v.Info();
            }
        }

        public void GetByIndex(int index)
        {
            repository[index].Info();
        }

        public void UpdateByIndex(int index, VehicleClass v)
        {
            repository[index] = v;
        }

        public void DeleteByIndex(int index)
        {
            repository.RemoveAt(index);
        }
    }
}

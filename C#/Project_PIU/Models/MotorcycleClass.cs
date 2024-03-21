using System;
using Vehicle;

namespace Motorcycle
{
    public class MotorcycleClass : VehicleClass
    {
        int CC;
        string Type;

        public MotorcycleClass(string _brand, string _model, string _year, int _km, int _price, string _condition, int cc, string type)
            : base(_brand, _model, _year, _km, _price, _condition, "Motorcycle")
        {
            CC = cc;
            Type = type;
        }
    }
}

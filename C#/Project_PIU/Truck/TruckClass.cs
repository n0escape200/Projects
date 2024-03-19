using System;
using Vehicle;

namespace Truck
{
    internal class TruckClass : VehicleClass
    {
        int CargoCapacity { get; set; }
        int TowCapacity { get; set; }
        public TruckClass(string _brand, string _model, string _year, int _km, int _price, string _condition, int _cargo, int _tow)
            : base(_brand, _model, _year, _km, _price, _condition, "Truck")
        {
            CargoCapacity = _cargo;
            TowCapacity = _tow;
        }
    }
}


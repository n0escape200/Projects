using System;
using Vehicle;

namespace Truck
{
    public class TruckClass : VehicleClass
    {
        int CargoCapacity { get; set; }
        int TowCapacity { get; set; }
        public TruckClass(long _owId,string _brand, string _model, string _year, int _km, int _price, string _condition, int _cargo, int _tow)
            : base(_owId, _brand, _model, _year, _km, _price, _condition, "Truck")
        {
            CargoCapacity = _cargo;
            TowCapacity = _tow;
        }
    }
}


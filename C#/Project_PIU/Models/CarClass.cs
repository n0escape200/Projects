using System;
using Vehicle;

namespace Car
{
    public class CarClass : VehicleClass
    {
        int NrOfDoors { get; set; }
        int CP { get; set; }
        string Body { get; set; }

        public CarClass(long _owId,string _brand, string _model, string _year, int _km, int _price, string _condition, int _nrDoors, int _cp, string _body)
            : base(_owId,_brand, _model, _year, _km, _price, _condition, "Car")
        {
            NrOfDoors = _nrDoors;
            CP = _cp;
            Body = _body;
        }
    }
}

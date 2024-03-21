using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vehicle
{
    public class VehicleClass
    {
        string Type { get; set; }
        string Brand { get; set; }
        string Model { get; set; }
        string Year { get; set; }
        int Km { get; set; }
        int Price { get; set; }
        string Condition { get; set; }

        public VehicleClass() { }

        public VehicleClass(string _brand, string _model, string _year, int _km, int _price, string _condition, string _type = "undefined")
        {
            Type = _type;
            Brand = _brand;
            Model = _model;
            Year = _year;
            Km = _km;
            Price = _price;
            Condition = _condition;
        }

        public string Info()
        {
            return "Brand: " + Brand + "\nModel: " + Model + "\nYear: " + Year
                + "\nKM: " + Km + "\nPrice: " + Price + "\nCondition: " + Condition + "\n";
        }

    }
}

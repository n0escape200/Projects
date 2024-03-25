using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vehicle
{
    public class VehicleClass
    {
        private static int lastId = 0;

        public int Id { get; set; }
        public string Type { get; set; }
        string Brand { get; set; }
        string Model { get; set; }
        string Year { get; set; }
        int Km { get; set; }
        int Price { get; set; }
        string Condition { get; set; }

        public VehicleClass()
        {
            Id = -1;
            Type = "undefined";
            Brand = "undefined";
            Model = "undefined";
            Year = "undefined";
            Km = 0;
            Price = 0;
            Condition = "undefined";           
        }

        public VehicleClass(string _brand, string _model, string _year, int _km, int _price, string _condition, string _type = "undefined")
        {
            Id = lastId++;
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
            return "ID:" + Id + "\nBrand: " + Brand + "\nModel: " + Model + "\nYear: " + Year
                + "\nKM: " + Km + "\nPrice: " + Price + "\nCondition: " + Condition + "\n";
        }

        public string FormatDataForFileSave()
        {
            string format = String.Format("{1}{0}{2}{0}{3}{0}{4}{0}{5}{0}{6}{0}{7}",
                "_",
                Type,
                Brand,
                Model,
                Year,
                Km,
                Price,
                Condition);
            return format;
        }

    }
}

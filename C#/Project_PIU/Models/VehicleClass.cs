using System;

namespace Vehicle
{
    public class VehicleClass
    {
        private static int lastId = 0;

        public int Id { get; set; }

        public long OwnerId { get; set; }
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

        public VehicleClass(long _owId, string _brand, string _model, string _year, int _km, int _price, string _condition, string _type = "undefined")
        {
            Id = lastId++;
            OwnerId = _owId;
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
            return "#ID:" + Id + "\nOwner's #ID:" + OwnerId + "\nBrand: " + Brand + "\nModel: " + Model + "\nYear: " + Year
                + "\nKM: " + Km + "\nPrice: " + Price + "\nCondition: " + Condition + "\n";
        }

        public string FormatDataForFileSave()
        {
            string format = String.Format("{1}{0}{2}{0}{3}{0}{4}{0}{5}{0}{6}{0}{7}{0}{8}{0}{9}",
                "_",
                Id,
                OwnerId,
                Brand,
                Model,
                Year,
                Km,
                Price,
                Condition,
                Type);
            return format;
        }

    }
}

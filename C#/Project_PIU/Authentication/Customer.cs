using Authentication;
using System.IO;
using System;
using System.Reflection.Emit;

namespace Models
{
    public class Customer:User
    {
        int Buget;
        string fileName = "C:\\Users\\n0_es\\Desktop\\Projects\\C#\\Project_PIU\\Authentication\\UserData.txt";

        public Customer() : base()
        {
           Buget = 0;
        }

        public Customer(string fname,string lname, string password, int buget, string type = "Customer")
        : base(fname, lname, password, type)
        {
            Buget = buget;
        }

         override public string FormatForData()
        {
            string format = String.Format("{1}{0}{2}{0}{3}{0}{4}{0}{5}",
                "_",
                Id,
                LastName,
                Username,
                Password,
                "CUSTOMER");
            return format;
        }

        override public void Register()
        {

            using (StreamWriter sw = new StreamWriter(fileName))
            {
                sw.WriteLine(FormatForData());
                sw.Close();
            }
        }

    }
}

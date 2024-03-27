using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Authentication
{
    public class User
    {

        public long Id;
        public string FirstName;
        public string LastName;
        public string Username;
        public string Password;
        string Type;

        static public int adminCode = 35057;

        string fileName = "C:\\Users\\n0_es\\Desktop\\Projects\\C#\\Project_PIU\\Authentication\\UserData.txt";

        public User() {
            Id = -1;
            FirstName = string.Empty;
            LastName = string.Empty;
            Username = string.Empty;
            Password = string.Empty;
        }

        public User(string fname,string lname,string username,string password,string type = "admin") {
            Id = DateTime.Now.Ticks;
            FirstName = fname;
            LastName = lname;
            Username = username;
            Password = password;
            Type = type.ToUpper();
        }

        virtual public string FormatForData()
        {
            string format = String.Format("{1}{0}{2}{0}{3}{0}{4}{0}{5}{0}{6}",
                "_",
                Id,
                FirstName,
                LastName,
                Username,
                Password,
                "ADMIN");
            return format;
        }

        virtual public void Register() {

            using(StreamWriter sw = new StreamWriter(fileName))
            {
                sw.WriteLine(FormatForData());
                sw.Close();
            }
        }

        public long Login(string username, string password)
        {
            using(StreamReader sw = new StreamReader(fileName))
            {
                string line;
                char[] separator = { '_' };
                while((line = sw.ReadLine()) != null)
                {                   
                    string[] aux = line.Split(separator);
                    if ((aux[3] == username) && (aux[4] == password))
                    {
                        sw.Close ();
                        return long.Parse(aux[0]);
                    }
                }
                sw.Close();
            }
            return 0;
        }
    }
}

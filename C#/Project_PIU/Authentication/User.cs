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
        string FirstName;
        string LastName;
        string Username;
        string Password;

        string fileName = "C:\\Users\\n0_es\\Desktop\\Projects\\C#\\Project_PIU\\Authentication\\UserData.txt";

        public User() {
            Id = -1;
            FirstName = string.Empty;
            LastName = string.Empty;
            Username = string.Empty;
            Password = string.Empty;
        }

        public User(string fname,string lname,string username,string password) {
            Id = DateTime.Now.Ticks;
            FirstName = fname;
            LastName = lname;
            Username = username;
            Password = password;
        }

        string FormatForData()
        {
            string format = String.Format("{1}{0}{2}{0}{3}{0}{4}{0}{5}",
                "_",
                Id,
                FirstName,
                LastName,
                Username,
                Password);
            return format;
        }

        public void Register() {

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

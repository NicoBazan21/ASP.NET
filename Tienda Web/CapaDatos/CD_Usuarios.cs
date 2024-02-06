using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using CapaEntidad;

namespace CapaDatos
{
    public class CD_Usuarios
    {
        public List<Usuarios> Listar()
        {
            List<Usuarios> lista = new List<Usuarios>();

            try
            {
                using (DBCarrito db = new DBCarrito())
                {
                    var listaa = db.Usuarios;

                    foreach (var item in listaa)
                    {
                        lista.Add(item);
                    }
                }
            }
            catch (Exception e)
            {
                lista = new List<Usuarios>();
            }

            return lista;
        }
    }
}

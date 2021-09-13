using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APIRentCar.Models.ViewModel
{
    public class ReservaHome
    {
        public int IdReserva { get; set; }
        public string NombreVehiculo { get; set; }
        public string imagen { get; set; }
        public decimal? CostoReserva { get; set; }
    }
}
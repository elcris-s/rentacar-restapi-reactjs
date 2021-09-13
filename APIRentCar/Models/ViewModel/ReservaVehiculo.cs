using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APIRentCar.Models.ViewModel
{
    public class ReservaVehiculo
    {
        public Reserva reserva { get; set; }
        public Vehiculo vehiculo { get; set; }
    }
}
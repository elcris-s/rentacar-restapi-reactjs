namespace APIRentCar.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Pago")]
    public partial class Pago
    {
        [Key]
        public int IdPago { get; set; }

        [StringLength(25)]
        public string IdUsuario { get; set; }

        [StringLength(30)]
        public string NombreTarjeta { get; set; }

        [StringLength(16)]
        public string NumTarj { get; set; }

        [StringLength(3)]
        public string CVV { get; set; }

        [StringLength(5)]
        public string FechaVencimiento { get; set; }

        //public virtual Usuario Usuario { get; set; }
    }
}

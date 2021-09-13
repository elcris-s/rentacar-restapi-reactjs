namespace APIRentCar.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Factura")]
    public partial class Factura
    {
        [Key]
        public int NoFactura { get; set; }

        [StringLength(25)]
        public string Telefono { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Fecha { get; set; }

        [StringLength(25)]
        public string IdUsuario { get; set; }

        [Column(TypeName = "money")]
        public decimal? MontoTotal { get; set; }

        //public virtual Usuario Usuario { get; set; }
    }
}

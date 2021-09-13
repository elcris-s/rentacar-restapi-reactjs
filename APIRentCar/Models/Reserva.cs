namespace APIRentCar.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Reserva")]
    public partial class Reserva
    {
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public Reserva()
        //{
        //    Usuario1 = new HashSet<Usuario>();
        //}

        [Key]
        public int IdReserva { get; set; }

        [StringLength(25)]
        public string IdUsuario { get; set; }

        public int? IdVehiculo { get; set; }

        [Column(TypeName = "date")]
        public DateTime? FechaInicioReserva { get; set; }

        [Column(TypeName = "date")]
        public DateTime? FechaFinalReserva { get; set; }

        [Column(TypeName = "money")]
        public decimal? CostoReserva { get; set; }

        //public virtual Usuario Usuario { get; set; }

        //public virtual Vehiculo Vehiculo { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<Usuario> Usuario1 { get; set; }
    }
}

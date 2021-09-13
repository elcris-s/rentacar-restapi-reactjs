namespace APIRentCar.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Vehiculo")]
    public partial class Vehiculo
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public Vehiculo()
        //{
        //    Reserva = new HashSet<Reserva>();
        //}

        [Key]
        public int IdVehiculo { get; set; }

        [StringLength(25)]
        public string NombreVehiculo { get; set; }

        [StringLength(7)]
        public string MatriculoVehiculo { get; set; }

        public int? CantidadaVehiculo { get; set; }

        public int? CategoriaVehiculo { get; set; }

        public int? AñoVehiculo { get; set; }

        public int? MarcaVehiculo { get; set; }

        [StringLength(10)]
        public string ColorVehiculo { get; set; }

        [Column(TypeName = "money")]
        public decimal? CostoReservaVehiculo { get; set; }

        [StringLength(1)]
        public string EstatusVehiculo { get; set; }

        [StringLength(500)]
        public string Descripcion { get; set; }

        [StringLength(250)]
        public string imagen { get; set; }

        //public virtual Categoria Categoria { get; set; }

        //public virtual Marca Marca { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<Reserva> Reserva { get; set; }
    }
}

namespace APIRentCar.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Usuario")]
    public partial class Usuario
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public Usuario()
        //{
        //    Factura = new HashSet<Factura>();
        //    Pago = new HashSet<Pago>();
        //    Reserva = new HashSet<Reserva>();
        //    UserLogin = new HashSet<UserLogin>();
        //}

        [Key]
        [StringLength(25)]
        public string IdUsuario { get; set; }

        [StringLength(25)]
        public string NombreUsuario { get; set; }

        [StringLength(25)]
        public string ApellidoUsuario { get; set; }

        [Column(TypeName = "date")]
        public DateTime? FechaNacimiento { get; set; }

        [StringLength(15)]
        public string TelefonoUsuario { get; set; }

        public int? VehiculoAlquilado { get; set; }

        public int? ReservaUsuario { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<Factura> Factura { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<Pago> Pago { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<Reserva> Reserva { get; set; }

        //public virtual Reserva Reserva1 { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<UserLogin> UserLogin { get; set; }
    }
}

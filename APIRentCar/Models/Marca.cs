namespace APIRentCar.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Marca")]
    public partial class Marca
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public Marca()
        //{
        //    Vehiculo = new HashSet<Vehiculo>();
        //}

        [Key]
        public int IdMarca { get; set; }

        [StringLength(25)]
        public string MarcaNombre { get; set; }

        [StringLength(1)]
        public string Estatus { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<Vehiculo> Vehiculo { get; set; }
    }
}

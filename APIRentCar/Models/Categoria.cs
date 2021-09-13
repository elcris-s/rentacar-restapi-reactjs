namespace APIRentCar.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Categoria")]
    public partial class Categoria
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public Categoria()
        //{
        //    Vehiculo = new HashSet<Vehiculo>();
        //}

        [Key]
        public int IdCategoria { get; set; }

        [StringLength(25)]
        public string NombreCategoria { get; set; }

        public string Estatus { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<Vehiculo> Vehiculo { get; set; }
    }
}

namespace APIRentCar.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("UserLogin")]
    public partial class UserLogin
    {
        [Key]
        public int IdLogin { get; set; }

        [StringLength(25)]
        public string IdUsuario { get; set; }

        public int? IdRol { get; set; }

        [StringLength(25)]
        public string Usuario { get; set; }

        [StringLength(25)]
        public string Contraseña { get; set; }

        //public virtual Roles Roles { get; set; }

        //public virtual Usuario Usuario1 { get; set; }
    }
}

using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace APIRentCar.Models
{
    public partial class DBRentCar : DbContext
    {
        public DBRentCar()
            : base("name=DBRentCar")
        {
        }

        public virtual DbSet<Categoria> Categoria { get; set; }
        public virtual DbSet<Factura> Factura { get; set; }
        public virtual DbSet<Marca> Marca { get; set; }
        public virtual DbSet<Pago> Pago { get; set; }
        public virtual DbSet<Reserva> Reserva { get; set; }
        public virtual DbSet<Roles> Roles { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
        public virtual DbSet<UserLogin> UserLogin { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
        public virtual DbSet<Vehiculo> Vehiculo { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categoria>()
                .Property(e => e.NombreCategoria)
                .IsUnicode(false);

            modelBuilder.Entity<Categoria>()
                .Property(e => e.Estatus)
                .IsUnicode(false);

            //modelBuilder.Entity<Categoria>()
            //    .HasMany(e => e.Vehiculo)
            //    .WithOptional(e => e.Categoria)
            //    .HasForeignKey(e => e.CategoriaVehiculo);

            modelBuilder.Entity<Factura>()
                .Property(e => e.Telefono)
                .IsUnicode(false);

            modelBuilder.Entity<Factura>()
                .Property(e => e.IdUsuario)
                .IsUnicode(false);

            modelBuilder.Entity<Factura>()
                .Property(e => e.MontoTotal)
                .HasPrecision(19, 4);

            modelBuilder.Entity<Marca>()
                .Property(e => e.MarcaNombre)
                .IsUnicode(false);

            modelBuilder.Entity<Marca>()
                .Property(e => e.Estatus)
                .IsUnicode(false);

            //modelBuilder.Entity<Marca>()
            //    .HasMany(e => e.Vehiculo)
            //    .WithOptional(e => e.Marca)
            //    .HasForeignKey(e => e.MarcaVehiculo);

            modelBuilder.Entity<Pago>()
                .Property(e => e.IdUsuario)
                .IsUnicode(false);

            modelBuilder.Entity<Pago>()
                .Property(e => e.NombreTarjeta)
                .IsUnicode(false);

            modelBuilder.Entity<Pago>()
                .Property(e => e.NumTarj)
                .IsUnicode(false);

            modelBuilder.Entity<Pago>()
                .Property(e => e.CVV)
                .IsUnicode(false);

            modelBuilder.Entity<Pago>()
                .Property(e => e.FechaVencimiento)
                .IsUnicode(false);

            modelBuilder.Entity<Reserva>()
                .Property(e => e.IdUsuario)
                .IsUnicode(false);

            modelBuilder.Entity<Reserva>()
                .Property(e => e.CostoReserva)
                .HasPrecision(19, 4);

            //modelBuilder.Entity<Reserva>()
            //    .HasMany(e => e.Usuario1)
            //    .WithOptional(e => e.Reserva1)
            //    .HasForeignKey(e => e.ReservaUsuario);

            modelBuilder.Entity<Roles>()
                .Property(e => e.Rol)
                .IsUnicode(false);

            modelBuilder.Entity<UserLogin>()
                .Property(e => e.IdUsuario)
                .IsUnicode(false);

            modelBuilder.Entity<UserLogin>()
                .Property(e => e.Usuario)
                .IsUnicode(false);

            modelBuilder.Entity<UserLogin>()
                .Property(e => e.Contraseña)
                .IsUnicode(false);

            modelBuilder.Entity<Usuario>()
                .Property(e => e.IdUsuario)
                .IsUnicode(false);

            modelBuilder.Entity<Usuario>()
                .Property(e => e.NombreUsuario)
                .IsUnicode(false);

            modelBuilder.Entity<Usuario>()
                .Property(e => e.ApellidoUsuario)
                .IsUnicode(false);

            modelBuilder.Entity<Usuario>()
                .Property(e => e.TelefonoUsuario)
                .IsUnicode(false);

            //modelBuilder.Entity<Usuario>()
            //    .HasMany(e => e.Reserva)
            //    .WithOptional(e => e.Usuario)
            //    .HasForeignKey(e => e.IdUsuario);

            modelBuilder.Entity<Vehiculo>()
                .Property(e => e.NombreVehiculo)
                .IsUnicode(false);

            modelBuilder.Entity<Vehiculo>()
                .Property(e => e.MatriculoVehiculo)
                .IsUnicode(false);

            modelBuilder.Entity<Vehiculo>()
                .Property(e => e.ColorVehiculo)
                .IsUnicode(false);

            modelBuilder.Entity<Vehiculo>()
                .Property(e => e.CostoReservaVehiculo)
                .HasPrecision(19, 4);

            modelBuilder.Entity<Vehiculo>()
                .Property(e => e.EstatusVehiculo)
                .IsUnicode(false);

            modelBuilder.Entity<Vehiculo>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<Vehiculo>()
                .Property(e => e.imagen)
                .IsUnicode(false);
        }
    }
}

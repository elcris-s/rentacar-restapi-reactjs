using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using APIRentCar.Models;
using APIRentCar.Models.ViewModel;

namespace APIRentCar.Controllers
{        
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]

    public class ReservasController : ApiController
    {

        private DBRentCar db = new DBRentCar();

        // GET: api/Reservas
        public IQueryable<Reserva> GetReserva()
        {
            return db.Reserva;
        }

        [HttpGet]
        [Route("api/Reservas/Usuario/{id}")]
        public async Task<IHttpActionResult> GetReservaUsuario(string id)
        {
            var reservausuario = await db.Usuario.Where(x => x.IdUsuario == id).Select(y => y.ReservaUsuario).FirstOrDefaultAsync();
            if(reservausuario == null)
            {
                return Ok("null");
            }
            var reserva = await db.Reserva.Where(x => x.IdReserva == reservausuario).SingleOrDefaultAsync();
            var vehiculo = db.Vehiculo.Where(x => x.IdVehiculo == reserva.IdVehiculo).Select(x => new { x.NombreVehiculo, x.imagen});
            ReservaHome reserva1 = new ReservaHome
            {
                IdReserva = reserva.IdReserva,
                NombreVehiculo = vehiculo.Select(x => x.NombreVehiculo).FirstOrDefault(),
                imagen = vehiculo.Select(x => x.imagen).FirstOrDefault(),
                CostoReserva = reserva.CostoReserva
            };

            return Ok(reserva1);
        }

        // GET: api/Reservas/5
        [ResponseType(typeof(Reserva))]
        public async Task<IHttpActionResult> GetReserva(string id)
        {
            var reserva = await db.Reserva.Where(x => x.IdUsuario == id).SingleOrDefaultAsync();
            var vehiculo = await db.Vehiculo.Where(x => x.IdVehiculo == reserva.IdVehiculo).SingleOrDefaultAsync();

            ReservaVehiculo reservaVehiculo = new ReservaVehiculo
            {
                reserva = reserva,
                vehiculo = vehiculo
            };

            return Ok(reservaVehiculo);
        }

        // PUT: api/Reservas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutReserva(int id, Reserva reserva)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reserva.IdReserva)
            {
                return BadRequest();
            }

            db.Entry(reserva).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Reservas
        [ResponseType(typeof(Reserva))]
        public async Task<IHttpActionResult> PostReserva(Reserva reserva)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Vehiculo vehiculo = await db.Vehiculo.FindAsync(reserva.IdVehiculo);
            vehiculo.CantidadaVehiculo--;

            if (vehiculo.CantidadaVehiculo <= 0)
            {
                vehiculo.EstatusVehiculo = "I";
            }

            db.Entry(vehiculo).State = EntityState.Modified;

            db.Reserva.Add(reserva);
            await db.SaveChangesAsync();

            try
            {
                Usuario cliente = await db.Usuario.FindAsync(reserva.IdUsuario);
                cliente.VehiculoAlquilado = reserva.IdVehiculo;
                var idre = await db.Reserva.Where(x => x.IdUsuario == reserva.IdUsuario).Select(y => y.IdReserva).ToArrayAsync();
                cliente.ReservaUsuario = idre[0];
                db.Entry(cliente).State = EntityState.Modified;
                await db.SaveChangesAsync();

            }
            catch (DbUpdateException)
            {
                if (ReservaExists(reserva.IdReserva))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = reserva.IdReserva }, reserva);
        }

        // DELETE: api/Reservas/5
        [ResponseType(typeof(Reserva))]
        public async Task<IHttpActionResult> DeleteReserva(string id)
        {
            Reserva reserva = await db.Reserva.Where(x => x.IdUsuario == id).SingleOrDefaultAsync();
            Usuario usuario = await db.Usuario.Where(x => x.IdUsuario == id).SingleOrDefaultAsync();
            usuario.ReservaUsuario = null;
            usuario.VehiculoAlquilado = null;

            db.Entry(usuario).State = EntityState.Modified;
            await db.SaveChangesAsync();

            if (reserva == null)
            {
                return NotFound();
            }

            db.Reserva.Remove(reserva);
            await db.SaveChangesAsync();

            return Ok(reserva);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ReservaExists(int id)
        {
            return db.Reserva.Count(e => e.IdReserva == id) > 0;
        }
    }
}
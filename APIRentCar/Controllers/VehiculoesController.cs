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

namespace APIRentCar.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]

    public class VehiculoesController : ApiController
    {
        private DBRentCar db = new DBRentCar();

        // GET: api/Vehiculoes
        public IQueryable<Vehiculo> GetVehiculo()
        {
            return db.Vehiculo;
        }

        // GET: api/Vehiculoes/5
        [ResponseType(typeof(Vehiculo))]
        public async Task<IHttpActionResult> GetVehiculo(int id)
        {
            Vehiculo vehiculo = await db.Vehiculo.FindAsync(id);
            if (vehiculo == null)
            {
                return NotFound();
            }

            return Ok(vehiculo);
        }

        // PUT: api/Vehiculoes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutVehiculo(int id, Vehiculo vehiculo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vehiculo.IdVehiculo)
            {
                return BadRequest();
            }

            db.Entry(vehiculo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehiculoExists(id))
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

        // POST: api/Vehiculoes
        [ResponseType(typeof(Vehiculo))]
        public async Task<IHttpActionResult> PostVehiculo(Vehiculo vehiculo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Vehiculo.Add(vehiculo);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = vehiculo.IdVehiculo }, vehiculo);
        }

        // DELETE: api/Vehiculoes/5
        [ResponseType(typeof(Vehiculo))]
        public async Task<IHttpActionResult> DeleteVehiculo(int id)
        {
            Vehiculo vehiculo = await db.Vehiculo.FindAsync(id);
            if (vehiculo == null)
            {
                return NotFound();
            }

            db.Vehiculo.Remove(vehiculo);
            await db.SaveChangesAsync();

            return Ok(vehiculo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VehiculoExists(int id)
        {
            return db.Vehiculo.Count(e => e.IdVehiculo == id) > 0;
        }
    }
}
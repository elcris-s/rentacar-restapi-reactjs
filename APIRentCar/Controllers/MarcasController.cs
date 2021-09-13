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

    public class MarcasController : ApiController
    {
        private DBRentCar db = new DBRentCar();

        // GET: api/Marcas
        public IQueryable<Marca> GetMarca()
        {
            return db.Marca;
        }

        // GET: api/Marcas/5
        [ResponseType(typeof(Marca))]
        public async Task<IHttpActionResult> GetMarca(int id)
        {
            Marca marca = await db.Marca.FindAsync(id);
            if (marca == null)
            {
                return NotFound();
            }

            return Ok(marca);
        }

        // PUT: api/Marcas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutMarca(int id, Marca marca)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != marca.IdMarca)
            {
                return BadRequest();
            }

            db.Entry(marca).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MarcaExists(id))
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

        // POST: api/Marcas
        [ResponseType(typeof(Marca))]
        public async Task<IHttpActionResult> PostMarca(Marca marca)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Marca.Add(marca);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = marca.IdMarca }, marca);
        }

        // DELETE: api/Marcas/5
        [ResponseType(typeof(Marca))]
        public async Task<IHttpActionResult> DeleteMarca(int id)
        {
            Marca marca = await db.Marca.FindAsync(id);
            if (marca == null)
            {
                return NotFound();
            }

            db.Marca.Remove(marca);
            await db.SaveChangesAsync();

            return Ok(marca);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MarcaExists(int id)
        {
            return db.Marca.Count(e => e.IdMarca == id) > 0;
        }
    }
}
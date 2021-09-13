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

    public class PagoesController : ApiController
    {
        private DBRentCar db = new DBRentCar();

        // GET: api/Pagoes
        public IQueryable<Pago> GetPago()
        {
            return db.Pago;
        }

        // GET: api/Pagoes/5
        [ResponseType(typeof(Pago))]
        public async Task<IHttpActionResult> GetPago(int id)
        {
            Pago pago = await db.Pago.FindAsync(id);
            if (pago == null)
            {
                return NotFound();
            }

            return Ok(pago);
        }

        // PUT: api/Pagoes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPago(int id, Pago pago)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pago.IdPago)
            {
                return BadRequest();
            }

            db.Entry(pago).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PagoExists(id))
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

        // POST: api/Pagoes
        [ResponseType(typeof(Pago))]
        public async Task<IHttpActionResult> PostPago(Pago pago)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Pago.Add(pago);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = pago.IdPago }, pago);
        }

        // DELETE: api/Pagoes/5
        [ResponseType(typeof(Pago))]
        public async Task<IHttpActionResult> DeletePago(int id)
        {
            Pago pago = await db.Pago.FindAsync(id);
            if (pago == null)
            {
                return NotFound();
            }

            db.Pago.Remove(pago);
            await db.SaveChangesAsync();

            return Ok(pago);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PagoExists(int id)
        {
            return db.Pago.Count(e => e.IdPago == id) > 0;
        }
    }
}
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

    public class FacturasController : ApiController
    {
        private DBRentCar db = new DBRentCar();

        // GET: api/Facturas
        public IQueryable<Factura> GetFactura()
        {
            return db.Factura;
        }

        // GET: api/Facturas/5
        [ResponseType(typeof(Factura))]
        public async Task<IHttpActionResult> GetFactura(int id)
        {
            Factura factura = await db.Factura.FindAsync(id);
            if (factura == null)
            {
                return NotFound();
            }

            return Ok(factura);
        }

        // PUT: api/Facturas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFactura(int id, Factura factura)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != factura.NoFactura)
            {
                return BadRequest();
            }

            db.Entry(factura).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FacturaExists(id))
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

        // POST: api/Facturas
        [ResponseType(typeof(Factura))]
        public async Task<IHttpActionResult> PostFactura(Factura factura)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Factura.Add(factura);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = factura.NoFactura }, factura);
        }

        // DELETE: api/Facturas/5
        [ResponseType(typeof(Factura))]
        public async Task<IHttpActionResult> DeleteFactura(int id)
        {
            Factura factura = await db.Factura.FindAsync(id);
            if (factura == null)
            {
                return NotFound();
            }

            db.Factura.Remove(factura);
            await db.SaveChangesAsync();

            return Ok(factura);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FacturaExists(int id)
        {
            return db.Factura.Count(e => e.NoFactura == id) > 0;
        }
    }
}
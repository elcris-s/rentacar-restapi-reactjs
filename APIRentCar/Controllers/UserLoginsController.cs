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
using System.Web.Http.Description;
using APIRentCar.Models;
using System.Web.Http.Cors;

namespace APIRentCar.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class UserLoginsController : ApiController
    {
        private DBRentCar db = new DBRentCar();

        // GET: api/UserLogins
        public IQueryable<UserLogin> GetUserLogin()
        {
            return db.UserLogin;
        }

        // GET: api/UserLogins/5
        [ResponseType(typeof(UserLogin))]
        public async Task<IHttpActionResult> GetUserLogin(string id)
        {
            UserLogin userLogin = await db.UserLogin.Where(x => x.Usuario == id).SingleOrDefaultAsync();
            //if (userLogin == null)
            //{
            //    return NotFound();
            //}

            return Ok(userLogin);
        }

        // PUT: api/UserLogins/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUserLogin(int id, UserLogin userLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userLogin.IdLogin)
            {
                return BadRequest();
            }

            db.Entry(userLogin).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserLoginExists(id))
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

        // POST: api/UserLogins
        [ResponseType(typeof(UserLogin))]
        public async Task<IHttpActionResult> PostUserLogin(UserLogin userLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserLogin.Add(userLogin);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = userLogin.IdLogin }, userLogin);
        }

        // DELETE: api/UserLogins/5
        [ResponseType(typeof(UserLogin))]
        public async Task<IHttpActionResult> DeleteUserLogin(int id)
        {
            UserLogin userLogin = await db.UserLogin.FindAsync(id);
            if (userLogin == null)
            {
                return NotFound();
            }

            db.UserLogin.Remove(userLogin);
            await db.SaveChangesAsync();

            return Ok(userLogin);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserLoginExists(int id)
        {
            return db.UserLogin.Count(e => e.IdLogin == id) > 0;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstone_V2.Models;
using capstone_v2;

namespace sdg_react_template.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SingleGameSaveController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public SingleGameSaveController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/SingleGameSave
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SingleGameSave>>> GetSingleGameSaves()
        {
            return await _context.SingleGameSaves.ToListAsync();
        }

        // GET: api/SingleGameSave/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SingleGameSave>> GetSingleGameSave(int id)
        {
            var singleGameSave = await _context.SingleGameSaves.FindAsync(id);

            if (singleGameSave == null)
            {
                return NotFound();
            }

            return singleGameSave;
        }

        // PUT: api/SingleGameSave/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSingleGameSave(int id, SingleGameSave singleGameSave)
        {
            if (id != singleGameSave.Id)
            {
                return BadRequest();
            }

            _context.Entry(singleGameSave).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SingleGameSaveExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SingleGameSave
        [HttpPost]
        public async Task<ActionResult<SingleGameSave>> PostSingleGameSave(SingleGameSave singleGameSave)
        {
            _context.SingleGameSaves.Add(singleGameSave);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSingleGameSave", new { id = singleGameSave.Id }, singleGameSave);
        }

        // DELETE: api/SingleGameSave/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SingleGameSave>> DeleteSingleGameSave(int id)
        {
            var singleGameSave = await _context.SingleGameSaves.FindAsync(id);
            if (singleGameSave == null)
            {
                return NotFound();
            }

            _context.SingleGameSaves.Remove(singleGameSave);
            await _context.SaveChangesAsync();

            return singleGameSave;
        }

        private bool SingleGameSaveExists(int id)
        {
            return _context.SingleGameSaves.Any(e => e.Id == id);
        }
    }
}

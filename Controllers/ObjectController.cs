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
  public class ObjectController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public ObjectController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Object
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Objects>>> GetObject()
    {
      return await _context.Object.ToListAsync();
    }

    // GET: api/Object/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Objects>> GetObjects(int id)
    {
      var objects = await _context.Object.FindAsync(id);

      if (objects == null)
      {
        return NotFound();
      }

      return objects;
    }

    // PUT: api/Object/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutObjects(int id, Objects objects)
    {
      if (id != objects.Id)
      {
        return BadRequest();
      }

      _context.Entry(objects).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ObjectsExists(id))
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

    // POST: api/Object
    [HttpPost]
    public async Task<ActionResult<Objects>> PostObjects(Objects objects)
    {
      _context.Object.Add(objects);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetObjects", new { id = objects.Id }, objects);
    }

    // DELETE: api/Object/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Objects>> DeleteObjects(int id)
    {
      var objects = await _context.Object.FindAsync(id);
      if (objects == null)
      {
        return NotFound();
      }

      _context.Object.Remove(objects);
      await _context.SaveChangesAsync();

      return objects;
    }

    private bool ObjectsExists(int id)
    {
      return _context.Object.Any(e => e.Id == id);
    }
  }
}

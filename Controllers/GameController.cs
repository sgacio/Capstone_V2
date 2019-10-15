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
  public class GameController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public GameController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Object
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Game>>> GetObject()
    {
      return await _context.Games.ToListAsync();
    }

    // GET: api/Object/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Game>> GetObjects(int id)
    {
      var game = await _context.Games.FindAsync(id);

      if (game == null)
      {
        return NotFound();
      }

      return game;
    }

    // PUT: api/Object/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutObjects(int id, Game Games)
    {
      if (id != Games.Id)
      {
        return BadRequest();
      }

      _context.Entry(Games).State = EntityState.Modified;

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
    public async Task<ActionResult<Game>> PostObjects(Game games)
    {
      // get the SGS for that player, 
      // if any, check the objects table for game data
      // if any return that THIS IS WHERE I AM STUCK LIKE A DUCK 
      // else create new object
      // var saves = _context.Object.FirstOrDefault(x => x.Id == objectId);

      // if (saves == null)
      // {
      _context.Games.Add(games);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetObjects", new { id = games.Id }, games);
      // }
      // else
      // {
      //   return saves;
      // }
    }

    // DELETE: api/Object/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Game>> DeleteObjects(int id)
    {
      var game = await _context.Games.FindAsync(id);
      if (game == null)
      {
        return NotFound();
      }

      _context.Games.Remove(game);
      await _context.SaveChangesAsync();

      return game;
    }

    private bool ObjectsExists(int id)
    {
      return _context.Games.Any(e => e.Id == id);
    }
  }
}

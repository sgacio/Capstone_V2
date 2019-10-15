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
  public class Player_GameController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public Player_GameController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/SingleGameSave
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Player_Game>>> GetSingleGameSaves()
    {
      return await _context.Player_Games.ToListAsync();
    }

    // GET: api/SingleGameSave/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Player_Game>> GetSingleGameSave(int id)
    {
      var singleGameSave = await _context.Player_Games.FindAsync(id);

      if (singleGameSave == null)
      {
        return NotFound();
      }

      return singleGameSave;
    }

    // PUT: api/SingleGameSave/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutSingleGameSave(int id, Player_Game player_Game)
    {
      if (id != player_Game.Id)
      {
        return BadRequest();
      }

      _context.Entry(player_Game).State = EntityState.Modified;

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
    public async Task<ActionResult<Player_Game>> PostSingleGameSave(Player_Game player_Game)
    {
      //   var game = _context.SingleGameSaves.FirstOrDefault(p => p.PlayerId == playerId);
      //   if (game == null)
      //   {
      _context.Player_Games.Add(player_Game);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetSingleGameSave", new { id = player_Game.Id }, player_Game);
      //   }
      //   else
      //   {
      //     return game;
      //   }
    }

    // DELETE: api/SingleGameSave/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Player_Game>> DeleteSingleGameSave(int id)
    {
      var singleGameSave = await _context.Player_Games.FindAsync(id);
      if (singleGameSave == null)
      {
        return NotFound();
      }

      _context.Player_Games.Remove(singleGameSave);
      await _context.SaveChangesAsync();

      return singleGameSave;
    }

    private bool SingleGameSaveExists(int id)
    {
      return _context.Player_Games.Any(e => e.Id == id);
    }
  }
}

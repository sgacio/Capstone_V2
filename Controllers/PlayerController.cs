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
  public class PlayerController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public PlayerController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/PlayerStat
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Player>>> GetPlayerStats()
    {
      return await _context.Players.ToListAsync();
    }

    // GET: api/PlayerStat/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Player>> GetPlayerStat(int id)
    {
      var player = await _context.Players.FindAsync(id);

      if (player == null)
      {
        return NotFound();
      }

      return player;
    }

    // PUT: api/PlayerStat/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPlayerStat(int id, Player player)
    {
      if (id != player.Id)
      {
        return BadRequest();
      }

      _context.Entry(player).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!PlayerStatExists(id))
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

    // POST: api/PlayerStat
    [HttpPost]
    public async Task<ActionResult<Player>> PostPlayerStat(Player player)
    {
      var user = _context.Players.FirstOrDefault(p => p.ProperName == player.ProperName);
      if (user == null)
      {
        _context.Players.Add(player);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetPlayerStat", new { id = player.Id }, player);
      }
      else
      {
        return user;
      }
    }

    // DELETE: api/PlayerStat/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Player>> DeletePlayerStat(int id)
    {
      var playerStat = await _context.Players.FindAsync(id);
      if (playerStat == null)
      {
        return NotFound();
      }

      _context.Players.Remove(playerStat);
      await _context.SaveChangesAsync();

      return playerStat;
    }

    private bool PlayerStatExists(int id)
    {
      return _context.Players.Any(e => e.Id == id);
    }
  }
}

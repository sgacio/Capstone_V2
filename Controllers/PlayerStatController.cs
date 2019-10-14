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
  public class PlayerStatController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public PlayerStatController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/PlayerStat
    [HttpGet]
    public async Task<ActionResult<IEnumerable<PlayerStat>>> GetPlayerStats()
    {
      return await _context.PlayerStats.ToListAsync();
    }

    // GET: api/PlayerStat/5
    [HttpGet("{id}")]
    public async Task<ActionResult<PlayerStat>> GetPlayerStat(int id)
    {
      var playerStat = await _context.PlayerStats.FindAsync(id);

      if (playerStat == null)
      {
        return NotFound();
      }

      return playerStat;
    }

    // PUT: api/PlayerStat/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPlayerStat(int id, PlayerStat playerStat)
    {
      if (id != playerStat.Id)
      {
        return BadRequest();
      }

      _context.Entry(playerStat).State = EntityState.Modified;

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
    public async Task<ActionResult<PlayerStat>> PostPlayerStat(PlayerStat playerStat)
    {
      var user = _context.PlayerStats.FirstOrDefault(p => p.ProperName == playerStat.ProperName);
      if (user == null)
      {
        _context.PlayerStats.Add(playerStat);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetPlayerStat", new { id = playerStat.Id }, playerStat);
      }
      else
      {
        return user;
      }
    }

    // DELETE: api/PlayerStat/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<PlayerStat>> DeletePlayerStat(int id)
    {
      var playerStat = await _context.PlayerStats.FindAsync(id);
      if (playerStat == null)
      {
        return NotFound();
      }

      _context.PlayerStats.Remove(playerStat);
      await _context.SaveChangesAsync();

      return playerStat;
    }

    private bool PlayerStatExists(int id)
    {
      return _context.PlayerStats.Any(e => e.Id == id);
    }
  }
}

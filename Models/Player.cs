using System;
using System.Collections.Generic;

namespace Capstone_V2.Models
{
  public class Player
  {
    public int Id { get; set; }
    public string ProperName { get; set; }
    public string Email { get; set; }
    public DateTime Date { get; set; } = DateTime.Now;
    public List<Player_Game> Player_Games { get; set; }
    //public List<Redeem> Redeem {get; set;}
  }
}
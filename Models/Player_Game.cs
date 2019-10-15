using System;
using System.Collections.Generic;

namespace Capstone_V2.Models
{
  public class Player_Game
  {
    public int Id { get; set; }
    public int? PlayerId { get; set; }
    public Player Player { get; set; }
    public int? GameId { get; set; }
    public Game Game { get; set; }
  }
}
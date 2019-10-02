using System;
using System.Collections.Generic;

namespace Capstone_V2.Models
{
  public class SingleGameSave
  {
    public int Id { get; set; }
    public int PlayerId { get; set; }
    public PlayerStat PlayerStat { get; set; }
    public int ObjectId { get; set; }
    public Objects Objects { get; set; }
  }
}
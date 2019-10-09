using System;
using System.Collections.Generic;

namespace Capstone_V2.Models
{
  public class PlayerStat
  {
    public int Id { get; set; }
    public string ProperName { get; set; }
    public string Email { get; set; }
    public DateTime Date { get; set; } = DateTime.Now;
    public List<SingleGameSave> SingleGameSaves { get; set; }
    //public List<Redeem> Redeem {get; set;}
  }
}
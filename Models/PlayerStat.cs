using System;
using System.Collections.Generic;

namespace Capstone_V2.Models
{
  public class PlayerStat
  {
    public string ProperName { get; set; }

    public string Email { get; set; }

    public string HandleUserName { get; set; }


    //Total earned all time
    public int TotalInventory { get; set; }

    public int InventoryPerSecond { get; set; }

    //Total Spent up to the current point
    public int TotalInventorySpent { get; set; }

    //Total earned - total spent
    public int GrossInventory { get; set; }

    public int TotalNumberOfObject1 { get; set; }

    public int TotalNumberOfObject2 { get; set; }

    public int TotalNumberOfObject3 { get; set; }

    public int TotalNumberOfObject4 { get; set; }

    //the join
  }
}
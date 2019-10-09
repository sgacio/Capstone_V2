using System;
using System.Collections.Generic;

namespace Capstone_V2.Models
{
  public class SingleGameSave
  {
    public int Id { get; set; }
    public int TotalInventory { get; set; }

    public int InventoryPerSecond { get; set; }

    public int TotalInventorySpent { get; set; }

    public int GrossInventory { get; set; }

    public int TotalNumberOfObject1 { get; set; }

    public int TotalNumberOfObject2 { get; set; }

    public int TotalNumberOfObject3 { get; set; }

    public int TotalNumberOfObject4 { get; set; }

    public DateTime DateSaved { get; set; } = DateTime.Now;

    // join

  }
}
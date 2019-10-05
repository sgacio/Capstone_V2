using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace Capstone_V2.Models
{
  public class Objects
  {
    public int Id { get; set; }

    public DateTime Date { get; set; } = DateTime.Now;

    [Column(TypeName = "json")]
    public string Counter { get; set; }

    [Column(TypeName = "json")]
    public string Clicker { get; set; }

    [Column(TypeName = "json")]
    public string Worker { get; set; }

    [Column(TypeName = "json")]
    public string Keurig { get; set; }

    [Column(TypeName = "json")]
    public string EspressoMachine { get; set; }
    public List<SingleGameSave> SingleGameSaves { get; set; }
  }
}
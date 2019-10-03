using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Capstone_V2.Models
{
  public class Objects
  {
    public int Id { get; set; }

    [Column(TypeName = "json")]
    public string Clicker { get; set; }

    [Column(TypeName = "json")]
    public string Worker { get; set; }

    [Column(TypeName = "json")]
    public string Keurig { get; set; }

    [Column(TypeName = "json")]
    public string Factory { get; set; }
    public List<SingleGameSave> SingleGameSaves { get; set; }
  }
}
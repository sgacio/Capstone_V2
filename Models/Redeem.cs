namespace Capstone_V2.Models
{
  public class Redeem
  {
    public int Id { get; set; }
    //this will have a json object containing the info about the cards
    //this will also be connected to the playerstat table in a one to many relationship(maybe?)
    //public int PlayerId {get; set;}
    //public <PlayerStat> PlayerStat {get; set;}
  }
}
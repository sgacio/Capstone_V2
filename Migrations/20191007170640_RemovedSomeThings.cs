using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class RemovedSomeThings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HandleUserName",
                table: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "TotalAllTimeInventory",
                table: "PlayerStats");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HandleUserName",
                table: "PlayerStats",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "PlayerStats",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TotalAllTimeInventory",
                table: "PlayerStats",
                nullable: false,
                defaultValue: 0);
        }
    }
}

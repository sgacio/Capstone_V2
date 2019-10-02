using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateSaved",
                table: "SingleGameSave");

            migrationBuilder.DropColumn(
                name: "GrossInventory",
                table: "SingleGameSave");

            migrationBuilder.DropColumn(
                name: "InventoryPerSecond",
                table: "SingleGameSave");

            migrationBuilder.DropColumn(
                name: "TotalInventory",
                table: "SingleGameSave");

            migrationBuilder.DropColumn(
                name: "TotalInventorySpent",
                table: "SingleGameSave");

            migrationBuilder.DropColumn(
                name: "TotalNumberOfObject1",
                table: "SingleGameSave");

            migrationBuilder.DropColumn(
                name: "TotalNumberOfObject2",
                table: "SingleGameSave");

            migrationBuilder.DropColumn(
                name: "TotalNumberOfObject3",
                table: "SingleGameSave");

            migrationBuilder.DropColumn(
                name: "GrossInventory",
                table: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "InventoryPerSecond",
                table: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "TotalInventory",
                table: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "TotalInventorySpent",
                table: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "TotalNumberOfObject1",
                table: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "TotalNumberOfObject2",
                table: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "TotalNumberOfObject3",
                table: "PlayerStats");

            migrationBuilder.RenameColumn(
                name: "TotalNumberOfObject4",
                table: "SingleGameSave",
                newName: "PlayerId");

            migrationBuilder.RenameColumn(
                name: "TotalNumberOfObject4",
                table: "PlayerStats",
                newName: "TotalAllTimeInventory");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "PlayerStats",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Object",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Clicker = table.Column<string>(type: "json", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Object", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Object");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "PlayerStats");

            migrationBuilder.RenameColumn(
                name: "PlayerId",
                table: "SingleGameSave",
                newName: "TotalNumberOfObject4");

            migrationBuilder.RenameColumn(
                name: "TotalAllTimeInventory",
                table: "PlayerStats",
                newName: "TotalNumberOfObject4");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateSaved",
                table: "SingleGameSave",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "GrossInventory",
                table: "SingleGameSave",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "InventoryPerSecond",
                table: "SingleGameSave",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalInventory",
                table: "SingleGameSave",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalInventorySpent",
                table: "SingleGameSave",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalNumberOfObject1",
                table: "SingleGameSave",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalNumberOfObject2",
                table: "SingleGameSave",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalNumberOfObject3",
                table: "SingleGameSave",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "GrossInventory",
                table: "PlayerStats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "InventoryPerSecond",
                table: "PlayerStats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalInventory",
                table: "PlayerStats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalInventorySpent",
                table: "PlayerStats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalNumberOfObject1",
                table: "PlayerStats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalNumberOfObject2",
                table: "PlayerStats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalNumberOfObject3",
                table: "PlayerStats",
                nullable: false,
                defaultValue: 0);
        }
    }
}

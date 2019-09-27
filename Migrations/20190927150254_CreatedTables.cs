using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class CreatedTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PlayerStats",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    ProperName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    HandleUserName = table.Column<string>(nullable: true),
                    TotalInventory = table.Column<int>(nullable: false),
                    InventoryPerSecond = table.Column<int>(nullable: false),
                    TotalInventorySpent = table.Column<int>(nullable: false),
                    GrossInventory = table.Column<int>(nullable: false),
                    TotalNumberOfObject1 = table.Column<int>(nullable: false),
                    TotalNumberOfObject2 = table.Column<int>(nullable: false),
                    TotalNumberOfObject3 = table.Column<int>(nullable: false),
                    TotalNumberOfObject4 = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlayerStats", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SingleGameSave",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    TotalInventory = table.Column<int>(nullable: false),
                    InventoryPerSecond = table.Column<int>(nullable: false),
                    TotalInventorySpent = table.Column<int>(nullable: false),
                    GrossInventory = table.Column<int>(nullable: false),
                    TotalNumberOfObject1 = table.Column<int>(nullable: false),
                    TotalNumberOfObject2 = table.Column<int>(nullable: false),
                    TotalNumberOfObject3 = table.Column<int>(nullable: false),
                    TotalNumberOfObject4 = table.Column<int>(nullable: false),
                    DateSaved = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SingleGameSave", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PlayerStats");

            migrationBuilder.DropTable(
                name: "SingleGameSave");
        }
    }
}

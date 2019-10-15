using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class ChangedNames : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SingleGameSaves");

            migrationBuilder.DropTable(
                name: "Object");

            migrationBuilder.DropTable(
                name: "PlayerStats");

            migrationBuilder.CreateTable(
                name: "Games",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Date = table.Column<DateTime>(nullable: false),
                    Counter = table.Column<string>(type: "json", nullable: true),
                    Clicker = table.Column<string>(type: "json", nullable: true),
                    Worker = table.Column<string>(type: "json", nullable: true),
                    Keurig = table.Column<string>(type: "json", nullable: true),
                    EspressoMachine = table.Column<string>(type: "json", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Games", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Players",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    ProperName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Players", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Player_Games",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    PlayerId = table.Column<int>(nullable: true),
                    GameId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Player_Games", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Player_Games_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Player_Games_Players_PlayerId",
                        column: x => x.PlayerId,
                        principalTable: "Players",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Player_Games_GameId",
                table: "Player_Games",
                column: "GameId");

            migrationBuilder.CreateIndex(
                name: "IX_Player_Games_PlayerId",
                table: "Player_Games",
                column: "PlayerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Player_Games");

            migrationBuilder.DropTable(
                name: "Games");

            migrationBuilder.DropTable(
                name: "Players");

            migrationBuilder.CreateTable(
                name: "Object",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Clicker = table.Column<string>(type: "json", nullable: true),
                    Counter = table.Column<string>(type: "json", nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    EspressoMachine = table.Column<string>(type: "json", nullable: true),
                    Keurig = table.Column<string>(type: "json", nullable: true),
                    Worker = table.Column<string>(type: "json", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Object", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PlayerStats",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Date = table.Column<DateTime>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    ProperName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlayerStats", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SingleGameSaves",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    ObjectId = table.Column<int>(nullable: true),
                    ObjectsId = table.Column<int>(nullable: true),
                    PlayerId = table.Column<int>(nullable: true),
                    PlayerStatId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SingleGameSaves", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SingleGameSaves_Object_ObjectsId",
                        column: x => x.ObjectsId,
                        principalTable: "Object",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SingleGameSaves_PlayerStats_PlayerStatId",
                        column: x => x.PlayerStatId,
                        principalTable: "PlayerStats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SingleGameSaves_ObjectsId",
                table: "SingleGameSaves",
                column: "ObjectsId");

            migrationBuilder.CreateIndex(
                name: "IX_SingleGameSaves_PlayerStatId",
                table: "SingleGameSaves",
                column: "PlayerStatId");
        }
    }
}

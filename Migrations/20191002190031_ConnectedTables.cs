using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class ConnectedTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_SingleGameSave",
                table: "SingleGameSave");

            migrationBuilder.RenameTable(
                name: "SingleGameSave",
                newName: "SingleGameSaves");

            migrationBuilder.AddColumn<int>(
                name: "ObjectId",
                table: "SingleGameSaves",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ObjectsId",
                table: "SingleGameSaves",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PlayerStatId",
                table: "SingleGameSaves",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_SingleGameSaves",
                table: "SingleGameSaves",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_SingleGameSaves_ObjectsId",
                table: "SingleGameSaves",
                column: "ObjectsId");

            migrationBuilder.CreateIndex(
                name: "IX_SingleGameSaves_PlayerStatId",
                table: "SingleGameSaves",
                column: "PlayerStatId");

            migrationBuilder.AddForeignKey(
                name: "FK_SingleGameSaves_Object_ObjectsId",
                table: "SingleGameSaves",
                column: "ObjectsId",
                principalTable: "Object",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SingleGameSaves_PlayerStats_PlayerStatId",
                table: "SingleGameSaves",
                column: "PlayerStatId",
                principalTable: "PlayerStats",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SingleGameSaves_Object_ObjectsId",
                table: "SingleGameSaves");

            migrationBuilder.DropForeignKey(
                name: "FK_SingleGameSaves_PlayerStats_PlayerStatId",
                table: "SingleGameSaves");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SingleGameSaves",
                table: "SingleGameSaves");

            migrationBuilder.DropIndex(
                name: "IX_SingleGameSaves_ObjectsId",
                table: "SingleGameSaves");

            migrationBuilder.DropIndex(
                name: "IX_SingleGameSaves_PlayerStatId",
                table: "SingleGameSaves");

            migrationBuilder.DropColumn(
                name: "ObjectId",
                table: "SingleGameSaves");

            migrationBuilder.DropColumn(
                name: "ObjectsId",
                table: "SingleGameSaves");

            migrationBuilder.DropColumn(
                name: "PlayerStatId",
                table: "SingleGameSaves");

            migrationBuilder.RenameTable(
                name: "SingleGameSaves",
                newName: "SingleGameSave");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SingleGameSave",
                table: "SingleGameSave",
                column: "Id");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class ChangedNamesInTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Factory",
                table: "Object",
                newName: "EspressoMachine");

            migrationBuilder.AlterColumn<int>(
                name: "PlayerId",
                table: "SingleGameSaves",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "ObjectId",
                table: "SingleGameSaves",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EspressoMachine",
                table: "Object",
                newName: "Factory");

            migrationBuilder.AlterColumn<int>(
                name: "PlayerId",
                table: "SingleGameSaves",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ObjectId",
                table: "SingleGameSaves",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}

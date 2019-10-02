using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class ChangedObjectsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Clicker",
                table: "Object",
                type: "json",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "json");

            migrationBuilder.AddColumn<string>(
                name: "Factory",
                table: "Object",
                type: "json",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Keurig",
                table: "Object",
                type: "json",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Worker",
                table: "Object",
                type: "json",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Factory",
                table: "Object");

            migrationBuilder.DropColumn(
                name: "Keurig",
                table: "Object");

            migrationBuilder.DropColumn(
                name: "Worker",
                table: "Object");

            migrationBuilder.AlterColumn<string>(
                name: "Clicker",
                table: "Object",
                type: "json",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "json",
                oldNullable: true);
        }
    }
}

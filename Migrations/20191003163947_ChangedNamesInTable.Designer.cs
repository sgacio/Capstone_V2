﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using capstone_v2;

namespace sdgreacttemplate.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20191003163947_ChangedNamesInTable")]
    partial class ChangedNamesInTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Capstone_V2.Models.Objects", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Clicker")
                        .HasColumnType("json");

                    b.Property<DateTime>("Date");

                    b.Property<string>("EspressoMachine")
                        .HasColumnType("json");

                    b.Property<string>("Keurig")
                        .HasColumnType("json");

                    b.Property<string>("Worker")
                        .HasColumnType("json");

                    b.HasKey("Id");

                    b.ToTable("Object");
                });

            modelBuilder.Entity("Capstone_V2.Models.PlayerStat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Date");

                    b.Property<string>("Email");

                    b.Property<string>("HandleUserName");

                    b.Property<string>("Password");

                    b.Property<string>("ProperName");

                    b.Property<int>("TotalAllTimeInventory");

                    b.HasKey("Id");

                    b.ToTable("PlayerStats");
                });

            modelBuilder.Entity("Capstone_V2.Models.SingleGameSave", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ObjectId");

                    b.Property<int?>("ObjectsId");

                    b.Property<int?>("PlayerId");

                    b.Property<int?>("PlayerStatId");

                    b.HasKey("Id");

                    b.HasIndex("ObjectsId");

                    b.HasIndex("PlayerStatId");

                    b.ToTable("SingleGameSaves");
                });

            modelBuilder.Entity("Capstone_V2.Models.SingleGameSave", b =>
                {
                    b.HasOne("Capstone_V2.Models.Objects", "Objects")
                        .WithMany("SingleGameSaves")
                        .HasForeignKey("ObjectsId");

                    b.HasOne("Capstone_V2.Models.PlayerStat", "PlayerStat")
                        .WithMany("SingleGameSaves")
                        .HasForeignKey("PlayerStatId");
                });
#pragma warning restore 612, 618
        }
    }
}

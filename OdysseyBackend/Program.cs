using Microsoft.EntityFrameworkCore;
using OdysseyBackend.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<OdysseyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers(); // ✅ Register controllers
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers(); // ✅ Enable routing for /api/... endpoints

app.Run();

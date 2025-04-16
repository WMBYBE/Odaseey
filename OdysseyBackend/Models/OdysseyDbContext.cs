using Microsoft.EntityFrameworkCore;

namespace OdysseyBackend.Models
{
    public class OdysseyDbContext : DbContext
    {
        public OdysseyDbContext(DbContextOptions<OdysseyDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        // Add other DbSet<T> if needed later
    }
}

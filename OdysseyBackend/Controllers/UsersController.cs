using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OdysseyBackend.Models;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly OdysseyDbContext _context;

    public UsersController(OdysseyDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }
}

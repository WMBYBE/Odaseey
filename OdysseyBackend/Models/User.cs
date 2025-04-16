namespace OdysseyBackend.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
        public int Xp { get; set; }
        public int Level { get; set; }
    }
}

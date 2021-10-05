![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/19pzrahbsznzroa69pmy.JPG)

The DbContext class is an integral part of Entity Framework. An instance of DbContext represents a session with the database which can be used to query and save instances of your entities to a database. DbContext is a combination of the Unit Of Work and Repository patterns.

DbContext in EF Core allows us to perform following tasks:
1. Manage database connection
2. Configure model & relationship
3. Querying database
4. Saving data to the database
5. Configure change tracking
6. Caching
7. Transaction management

To use DbContext in our application, we need to create the class that derives from DbContext, also known as context class. This context class typically includes DbSet<TEntity> properties for each entity in the model. Consider the following example of context class in EF Core.
```
public class SchoolContext : DbContext
{
    public SchoolContext()
    {
  
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
    }
    //entities
    public DbSet<Student> Students { get; set; }
    public DbSet<Course> Courses { get; set; }
} 
```
In the example above, the SchoolContext class is derived from the DbContext class and contains the DbSet<TEntity> properties of Student and Course type. It also overrides the OnConfiguring and OnModelCreating methods. We must create an instance of SchoolContext to connect to the database and save or retrieve Student or Course data.

The OnConfiguring() method allows us to select and configure the data source to be used with a context using DbContextOptionsBuilder. Learn how to configure a DbContext class at here.

The OnModelCreating() method allows us to configure the model using ModelBuilder Fluent API.

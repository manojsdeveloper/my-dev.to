Entity Framework Fluent API is used to configure domain classes to override conventions.
EF Fluent API is based on a Fluent API design pattern (a.k.a Fluent Interface) where the result is formulated by method chaining.

In Entity Framework Core, the ModelBuilder class acts as a Fluent API. By using it, we can configure many different things, as it provides more configuration options than data annotation attributes.

Entity Framework Core Fluent API configures the following aspects of a model:

* Model Configuration: Configures an EF model to database mappings. Configures the default Schema, DB functions, additional data annotation attributes and entities to be excluded from mapping.
* Entity Configuration: Configures entity to table and relationships mapping e.g. PrimaryKey, AlternateKey, Index, table name, one-to-one, one-to-many, many-to-many relationships etc.
* Property Configuration: Configures property to column mapping e.g. column name, default value, nullability, Foreignkey, data type, concurrency column etc.

Below attributes has been most recommeneded.

**HasOne** method is used to configure the one side of a one to many relationship, or one end of a one to one relationship.

#### One To One Relationship 
The following example illustrates the use of HasOne with WithOne to configure a one-to-one relationship:
```
public class SampleContext : DbContext
{
    public DbSet<Author> Authors { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Author>()
            .HasOne(a => a.Biography)
            .WithOne(b => b.Author);
    }
}
public class Author
{
    public int AuthorId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public AuthorBiography Biography { get; set; }
}
public class AuthorBiography
{
    public int AuthorBiographyId { get; set; }
    public string Biography { get; set; }
    public int AuthorId { get; set; }
    public Author Author { get; set; }
}
```
#### One To Many Relationship 
This example illustrates the use of the HasOne method together with the WithMany method to configure a one-to-many relationship:
```
public class SampleContext : DbContext
{
    public DbSet<Employee> Employees { get; set; }
    public DbSet<Company> Companies { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Employee>()
        .HasOne(e => e.Company)
        .WithMany(c => c.Employees);
    }
public class Company
{
    public int Id { get; set; }
    public string Name { get; set; }
    public ICollection<Employee> Employees { get; set; }
}
public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
    public Company Company { get; set; }
}
```

#### Configure Cascade Delete using Fluent API
Cascade delete automatically deletes the child row when the related parent row is deleted. For example, if a Grade is deleted, then all the Students in that grade should also be deleted from the database automatically.

Use the OnDelete method to configure the cascade delete between Student and Grade entities, as shown below.
```
modelBuilder.Entity<Grade>()
    .HasMany<Student>(g => g.Students)
    .WithOne(s => s.Grade)
    .HasForeignKey(s => s.CurrentGradeId)
    .OnDelete(DeleteBehavior.Cascade);
```
The `OnDelete()` method cascade delete behaviour uses the DeleteBehavior parameter. You can specify any of the following DeleteBehavior values, based on your requirement.

Cascade: Dependent entities will be deleted when the principal entity is deleted.
ClientSetNull: The values of foreign key properties in the dependent entities will be set to null.
Restrict: Prevents Cascade delete.
SetNull: The values of foreign key properties in the dependent entities will be set to null.

#### Fluent API HasIndex Method
HasIndex method is used to create a database index on the column mapped to the specified entity property. By default, indexes are created for foreign keys and alternate keys. You may wish to create indexes on other properties to speed up data retrieval:
```
public class SampleContext : DbContext
{
    public DbSet<Book> Books { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Book>()
            .HasIndex(b => b.Isbn);
    }
}
public class Book
{
    public int BookId { get; set; }
    public string Title { get; set; }
    public string Isbn { get; set; }
}
```

#### Specifying the Maximum Length on a Property
In the following example, the Name property should be no longer than 50 characters. If you make the value longer than 50 characters, you will get a DbEntityValidationException exception. If Code First creates a database from this model it will also set the maximum length of the Name column to 50 characters.
```
modelBuilder.Entity<Department>().Property(t => t.Name).HasMaxLength(50);
```

#### The Fluent API HasColumnName Method
The HasColumnName attribute is applied to a property to specify the database column that the property should map to when the entity's property name and the database column name differ. The following example maps the Title property in the Book entity to a database column named Description in the Books table:
```
public class SampleContext : DbContext
{
    public DbSet<Book> Books { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Book>()
            .Property(b => b.Title).HasColumnName("Description");
    }
}
public class Book
{
    public int BookId { get; set; }
    public string Title { get; set; }
    public Author Author { get; set; }
}
```

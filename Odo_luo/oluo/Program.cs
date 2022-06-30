var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddMvc();

builder.Services.AddControllersWithViews();
//    .AddRazorOptions(options => {
//    options.ViewLocationFormats.Add("/{1}/{0}.cshtml");
//    options.ViewLocationFormats.Add("/Shared/{0}.cshtml");
//});
builder.Services.AddRazorPages();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

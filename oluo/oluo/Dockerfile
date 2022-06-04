#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
Run ls
WORKDIR /app
Run ls
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
RUN ls
COPY ["oluo/oluo/oluo.csproj", "oluo_build/"]
RUN dotnet restore "oluo/oluo.csproj"
COPY . .
WORKDIR "/src/oluo_build"
run ls
RUN dotnet build "oluo.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "oluo.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
run ls
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "oluo.dll"]
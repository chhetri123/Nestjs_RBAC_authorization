import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectsModule } from "./modules/projects/projects.module";
import { UsersModule } from "./modules/users/users.module";
import { SnakeNamingStrategy } from "./snake-naming.strategy";

import { join } from "path";
import { PermissionsModule } from "./modules/permissions/permissions.module";
import { User } from "./modules/users/user.entity";
import { Project } from "./modules/projects/project.entity";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "myuser",
      password: "mypassword",
      database: "rbac_db",
      namingStrategy: new SnakeNamingStrategy(),
      logging: true,
      autoLoadEntities: true,
      entities: [User, Project],
      synchronize: true,
      // entities: [join(__dirname, "./modules/**/*.entity{.ts,.js}")],
      migrations: [join(__dirname, "./migrations/*{.ts,.js}")],
    }),
    PermissionsModule,
    ProjectsModule,
    UsersModule,
  ],
})
export class AppModule {}

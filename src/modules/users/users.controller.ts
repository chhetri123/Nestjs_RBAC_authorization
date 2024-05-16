import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import {
  RequiresPermission,
  PermissionResource,
  PermissionAction,
  PermissionResourceTarget,
} from "../permissions/decorators/permissions.decorator";
import { PermissionsGuard } from "../permissions/guards/permissions.guard";
import { UserDto } from "./dto/user.dto";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createOne(@Body() dto: UserDto): Promise<User> {
    return this.usersService.createOne(dto);
  }

  @UseGuards(PermissionsGuard)
  @RequiresPermission(
    PermissionResource.USERS,
    PermissionAction.GET,
    PermissionResourceTarget.SOME
  )
  @Get()
  getMany(): Promise<User[]> {
    return this.usersService.getMany();
  }
}

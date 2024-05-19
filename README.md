# RBAC system with NestJS
# Project Name

## Introduction
Brief introduction to the project and its purpose.

## Table of Contents
- [App Business Logic](#app-business-logic)
- [RBAC Scheme](#rbac-scheme)
- [App Architecture](#app-architecture)
- [Permissions System](#permissions-system)

## App Business Logic
- Defines the business logic of the application.
- Includes 3 tables: Users, Projects, and a joint table for many-to-many relationships.
- Roles for users: Admin, Contributor, Guest.
- Additional rule: Restricted projects limit actions to members only, even for admins.

## RBAC Scheme
- Utilizes allow-list and block-list to define user permissions.
- Exposes a /permissions endpoint for conditional feature toggling on the frontend.

## App Architecture
- Custom @RequiresPermission decorator for routes.
- PermissionsGuard computes permissions based on user roles and memberships.
- Permissions context injected into downstream consumers for resource filtering.
- Follows NestJS conventions while integrating permissions logic at multiple layers.

## Permissions System
- Each controller route decorated with permissions declaration and related guard.
- Forbidden 403 error returned if permissions don't match.
- Permissions context used by services to filter resources.
- Permissions logic integrated into ORM layer for scoping and filtering DB queries.



import { Reflector } from '@nestjs/core';
// created @Roles decorator with the help of Reflector method also can use @SetMetaData
// we can now assign role with the help of decorator such as @Roles(['Admin'])
export const Roles = Reflector.createDecorator<string[]>();

import { Reflector } from '@nestjs/core';
// defined decorator for the roles like admin or user
export const Roles = Reflector.createDecorator<string[]>();
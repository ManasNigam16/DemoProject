import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dataTypes/create-cat.dto';
import { ListAllEntities } from './dataTypes/list-all-entities.dto';
import { CatsService } from './cats.service';
import { error } from 'console';
import { HttpExceptionFilter } from './http-exception.filter';
import { RoleGaurd } from './auth.gaurd';
import { Roles } from './roles.decorator';

@Controller('cats')
@UseGuards(RoleGaurd)
export class CatController {
  constructor(private catsService: CatsService) {}

  // Post request to add new cat field
  @Post()
  @Roles(['admin'])
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  // get request fetches all cat data

  @Get()
  findAll(@Req() request: Request): string {
    return 'This will return all data';
  }

  // Anything like ab_cd, ab@cd

  @Get('ab*cd')
  find() {
    return 'This route uses a wildcard';
  }

  // this route will take the id from params and
  // then param can be accessed into the string to be returned

  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  // manually declared exception filter
  findOne(@Param('id', ParseIntPipe) params: any): string {
    return `returns a #${params.id} cat`;
  }

  // Post request for the adding the cat
  @Post('addCat')
  async add(@Body() createCatDto: CreateCatDto) {
    return `adds a new cat: ${createCatDto}`;
  }

  // here it is for accessing things form the query parameters
  @Get()
  findsAll(@Query() query: ListAllEntities) {
    return `returns all cats (limit: ${query.limit} items)`;
  }

  // route for update the existing one if exist or creating a new one if not exist
  @Put(':id')
  update(
    @Param('id')
    id: number,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    try {
      return `This action updates a #${id} cat whose age is ${updateCatDto.age}`;
    } catch {
      throw new HttpException(
        { status: HttpStatus.FORBIDDEN, error: 'Error in api' },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  // route for deleting the entity from the db
  // by taking out the id param from the route
  @Delete(':id')
  remove(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ) {
    return `This action removes a #${id} cat`;
  }
}

import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/entities/project.entity';
import { ProjectController } from './project.controller';

@Module({
  imports:[ TypeOrmModule.forFeature([Project])],
  providers: [ProjectService],
  controllers: [ProjectController],
  exports:[ProjectService]
})
export class ProjectModule {}

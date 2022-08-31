import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://khacvux:byVWwL4UdFC2npf2@smart-reminders.xyunmg4.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
    CategoryModule,
    NotesModule
  ],
})
export class AppModule {}

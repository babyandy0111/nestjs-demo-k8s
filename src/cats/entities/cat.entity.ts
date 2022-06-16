import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Cat {
  @Field(() => Int, { description: 'cat id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'cat name' })
  @Column()
  name: string;

  @Field(() => Int, { description: 'cat age' })
  @Column()
  age: number;

  @Field(() => Int, { description: 'user id' })
  @Column()
  user_id: number;
}

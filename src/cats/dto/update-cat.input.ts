import { CreateCatInput } from './create-cat.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateCatInput extends PartialType(CreateCatInput) {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  age: number;
}

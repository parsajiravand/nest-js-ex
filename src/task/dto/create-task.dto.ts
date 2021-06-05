import { IsNotEmpty, MinLength, ValidationArguments } from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty({
    message: 'پر کردن فیلد الزامی است',
  })
  @MinLength(5, {
    message: (args: ValidationArguments)=>`حداقل${args.value.length}`,
  })
  title: string;

  @IsNotEmpty()
  description: string;
}

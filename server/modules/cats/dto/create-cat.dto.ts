import { IsInt, IsString } from 'class-validator';

/**
 * Create4 cat dto
 * 在处理数据时，通常使用dto来针对不同操作指定数据接口，和interface不同，dto往往用类的方式进行声明
 *
 * @export
 * @class CreateCatDto
 */
export class CreateCatDto {
  /**
   * name field
   *
   * @type {string}
   * @memberof CreateCatDto
   */
  @IsString()
  public readonly name: string;

  /**
   * age field
   *
   * @type {number}
   * @memberof CreateCatDto
   */
  @IsInt()
  public readonly age: number;

  /**
   * bread
   *
   * @type {string}
   * @memberof CreateCatDto
   */
  @IsString()
  public readonly breed: string;
}

/**
 * Interface cat
 * 该文件导出一个cat的接口，用于实现不同文件之间的数据交互。在实际项目中，接口文件不仅仅用于项目中不同模块之间的数据交互，也为实现前后端的统一开发提供了条件。
 *
 * @export
 * @interface ICat
 */
export interface ICat {
  /**
   * name field
   *
   * @type {string}
   * @memberof ICat
   */
  readonly name: string;

  /**
   * age field
   *
   * @type {number}
   * @memberof ICat
   */
  readonly age: number;

  /**
   * breed field
   *
   * @type {string}
   * @memberof ICat
   */
  readonly breed: string;
}

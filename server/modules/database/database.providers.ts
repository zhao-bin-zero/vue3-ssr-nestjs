/**
 * data base providers
 */
export const databaseProviders: Array<any> = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<any> => {}
  }
];

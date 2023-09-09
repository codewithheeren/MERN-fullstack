import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class FeatureModule1 {
  constructor(){
    console.log("Feature Module1 invoke.");
  }
}

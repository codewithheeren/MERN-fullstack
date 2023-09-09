import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class FeatureModule2 {
  constructor(){
    console.log("feature Module2 invoke.");
  }
}

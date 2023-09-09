import { Module } from '@nestjs/common';
import { FeatureModule1 } from './feature1.module';
import { FeatureModule2 } from './feature2.module';

@Module({
  imports: [FeatureModule1,FeatureModule2],
  controllers: [],
  providers: [],
})
export class OrdersModule {
  constructor(){
    console.log("Orders Module invoke.");
  }
}

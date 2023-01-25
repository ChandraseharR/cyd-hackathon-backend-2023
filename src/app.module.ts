import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [SharedModule,HttpModule.register(baseURL: 'api.openweathermap.org/data/2.5/weather',
  params: {
    appid: process.env.OPEN_WEATHER_KEY,
  },
}),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { WatchlistController } from './watchlist.controller';
// import { HttpModule } from '@nestjs/common';

// @Module({
//   imports: [HttpModule],
//   controllers: [WatchlistController],
//   providers: [],
// })
// export class WatchlistModule {}
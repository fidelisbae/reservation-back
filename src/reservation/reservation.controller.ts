import { Body, Controller, Get, Post } from '@nestjs/common';

import { ReservationService } from './reservation.service';
import { ReserveInput } from './reservation.dto';

@Controller('api')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @Get('reservations')
  async getReservations() {
    try {
      const result = await this.reservationService.getReservations();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  @Post('reserve')
  async reserve(@Body() input: ReserveInput) {
    try {
      const result = await this.reservationService.reserve(input);

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

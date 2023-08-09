import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Reservation } from './reservation.entity';
import { ReserveInput } from './reservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async getReservations(): Promise<Reservation[]> {
    const reservations = await this.reservationRepository.find();

    return reservations;
  }

  async reserve(input: ReserveInput): Promise<Reservation> {
    const result = await this.reservationRepository.save(input);

    return result;
  }
}

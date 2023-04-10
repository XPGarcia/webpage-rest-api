import { Certification } from '../../entities';

export interface CertificationRepository {
  find({ userId }: { userId: string }): Promise<Certification[]>;
}

export const CertificationRepository = Symbol('CertificationRepository');

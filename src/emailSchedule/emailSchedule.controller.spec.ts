import { Test, TestingModule } from '@nestjs/testing';
import { EmailScheduleController } from './emailSchedule.controller';

describe('EmailScheduleController', () => {
  let controller: EmailScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailScheduleController],
    }).compile();

    controller = module.get<EmailScheduleController>(EmailScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

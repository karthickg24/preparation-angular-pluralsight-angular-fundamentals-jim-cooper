import { TestBed } from '@angular/core/testing';
import { ISession } from '../event.model';
import { Observable } from 'rxjs';
import { VoterService } from './voter.service';

describe('VoterService', () => {
  // beforeEach(() => TestBed.configureTestingModule({}));

  // it('should be created', () => {
  //   const service: VoterService = TestBed.get(VoterService);
  //   expect(service).toBeTruthy();
  // });
  let voterService: VoterService,
    mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });
  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters', () => {
      const session = { id: 6, voters: ['joe', 'john']};

      voterService.deleteVoter('3', <ISession>session, 'joe');

    });
  });
});

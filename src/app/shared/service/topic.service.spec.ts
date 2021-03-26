import {TopicService} from './TopicService';
import {HttpErrorResponse} from "@angular/common/http";
import {defer} from "rxjs";
import {Topic} from '../model/topic.model';


// Create async observable error that errors
//  after a JS engine turn
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

export function asyncSucces<T>(data: any) {
  return defer(() => Promise.resolve(data));
}
//Avec Jasmine, la fonction describe décrit un groupe de tests.
describe('TopicService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: TopicService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TopicService(httpClientSpy as any);
  });

  it('should throw an error when service is not available', () => {
    const errorResponse = new HttpErrorResponse({
      error: '500 error',
      status: 500,
      statusText: 'Not available'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));


    service.getTopics().subscribe(
      data => fail('Should have failed with 500 error'),
      (error: any) => {
        expect(error).toEqual('(Erreur Serveur) Echec de la récupération des topics');
      });
  });

  it('should throw an error when request timeout', () => {
    const errorResponse = new HttpErrorResponse({
      error: new ErrorEvent("", {message: "Request timeout"}),
      status: 408,
      statusText: 'Request timeout'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));


    service.getTopics().subscribe(
      data => fail('Should have failed with 404 error'),
      (error: any) => {
        expect(error).toEqual(`Error: Request timeout`);
      });
  });


  it('should return a list of Topics', () => {
    const testData = [new Topic(), new Topic()];

    httpClientSpy.get.and.returnValue(asyncSucces(testData));
    // le service appelle le serveur avec une requete httpclient, la reponse du serveur soit 404, 500 ou 200
    // ça retourne une promesse avec 2 fonctions (en cas de succes et en cas d'erreur)
    service.getTopics().subscribe(
      data => expect(data).toEqual(testData),
      (error: any) => {
        fail("Should have failed with 500 error")
      });
  });
});

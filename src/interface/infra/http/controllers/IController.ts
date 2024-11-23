export interface IController {
  handle(request: Request, response: Response): Promise<Response>;
}

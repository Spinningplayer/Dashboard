import { Routine } from './routine.model';

export class Switch{
    public _id: string;
    public name: string;
    public onRoutine: Routine;
    public offRoutine: Routine;
    public state: boolean;

}

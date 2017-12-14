export interface LedstripMessage {
    address: number;
    color: string;
}

export abstract class LedstripControllerService {
  setController: (Controller) => boolean;
  setLedstrip: (Ledstrip) => boolean;
  sendMessage: (string) => LedstripMessage;
}



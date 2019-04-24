import { supportedProviders } from "src/app/shared/interfacesAndTypes/types";

export class User {
  constructor(private id: string, private provider: supportedProviders) {}
}

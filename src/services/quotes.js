import { quotesClient } from "./config";

export const zenQuotes = async () => quotesClient.get("");

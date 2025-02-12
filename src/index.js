import Resolver from "@forge/resolver";
import api from "@forge/api";

const resolver = new Resolver();

export const handler = resolver.getDefinitions();

import { Paginator } from "@aws-sdk/types";

import { ListSlotsCommand, ListSlotsCommandInput, ListSlotsCommandOutput } from "../commands/ListSlotsCommand";
import { LexModelsV2 } from "../LexModelsV2";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LexModelsV2Client,
  input: ListSlotsCommandInput,
  ...args: any
): Promise<ListSlotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSlotsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LexModelsV2,
  input: ListSlotsCommandInput,
  ...args: any
): Promise<ListSlotsCommandOutput> => {
  // @ts-ignore
  return await client.listSlots(input, ...args);
};
export async function* paginateListSlots(
  config: LexModelsV2PaginationConfiguration,
  input: ListSlotsCommandInput,
  ...additionalArguments: any
): Paginator<ListSlotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSlotsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelsV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LexModelsV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LexModelsV2 | LexModelsV2Client");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}

import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AssociateMemberCommandInput, AssociateMemberCommandOutput } from "./commands/AssociateMemberCommand";
import {
  BatchGetAccountStatusCommandInput,
  BatchGetAccountStatusCommandOutput,
} from "./commands/BatchGetAccountStatusCommand";
import {
  BatchGetFreeTrialInfoCommandInput,
  BatchGetFreeTrialInfoCommandOutput,
} from "./commands/BatchGetFreeTrialInfoCommand";
import {
  CancelFindingsReportCommandInput,
  CancelFindingsReportCommandOutput,
} from "./commands/CancelFindingsReportCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand";
import {
  CreateFindingsReportCommandInput,
  CreateFindingsReportCommandOutput,
} from "./commands/CreateFindingsReportCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import { DisableCommandInput, DisableCommandOutput } from "./commands/DisableCommand";
import {
  DisableDelegatedAdminAccountCommandInput,
  DisableDelegatedAdminAccountCommandOutput,
} from "./commands/DisableDelegatedAdminAccountCommand";
import { DisassociateMemberCommandInput, DisassociateMemberCommandOutput } from "./commands/DisassociateMemberCommand";
import { EnableCommandInput, EnableCommandOutput } from "./commands/EnableCommand";
import {
  EnableDelegatedAdminAccountCommandInput,
  EnableDelegatedAdminAccountCommandOutput,
} from "./commands/EnableDelegatedAdminAccountCommand";
import {
  GetDelegatedAdminAccountCommandInput,
  GetDelegatedAdminAccountCommandOutput,
} from "./commands/GetDelegatedAdminAccountCommand";
import {
  GetFindingsReportStatusCommandInput,
  GetFindingsReportStatusCommandOutput,
} from "./commands/GetFindingsReportStatusCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import {
  ListAccountPermissionsCommandInput,
  ListAccountPermissionsCommandOutput,
} from "./commands/ListAccountPermissionsCommand";
import { ListCoverageCommandInput, ListCoverageCommandOutput } from "./commands/ListCoverageCommand";
import {
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
} from "./commands/ListCoverageStatisticsCommand";
import {
  ListDelegatedAdminAccountsCommandInput,
  ListDelegatedAdminAccountsCommandOutput,
} from "./commands/ListDelegatedAdminAccountsCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import {
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput,
} from "./commands/ListFindingAggregationsCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsageTotalsCommandInput, ListUsageTotalsCommandOutput } from "./commands/ListUsageTotalsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "./commands/UpdateFilterCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateMemberCommandInput
  | BatchGetAccountStatusCommandInput
  | BatchGetFreeTrialInfoCommandInput
  | CancelFindingsReportCommandInput
  | CreateFilterCommandInput
  | CreateFindingsReportCommandInput
  | DeleteFilterCommandInput
  | DescribeOrganizationConfigurationCommandInput
  | DisableCommandInput
  | DisableDelegatedAdminAccountCommandInput
  | DisassociateMemberCommandInput
  | EnableCommandInput
  | EnableDelegatedAdminAccountCommandInput
  | GetDelegatedAdminAccountCommandInput
  | GetFindingsReportStatusCommandInput
  | GetMemberCommandInput
  | ListAccountPermissionsCommandInput
  | ListCoverageCommandInput
  | ListCoverageStatisticsCommandInput
  | ListDelegatedAdminAccountsCommandInput
  | ListFiltersCommandInput
  | ListFindingAggregationsCommandInput
  | ListFindingsCommandInput
  | ListMembersCommandInput
  | ListTagsForResourceCommandInput
  | ListUsageTotalsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateFilterCommandInput
  | UpdateOrganizationConfigurationCommandInput;

export type ServiceOutputTypes =
  | AssociateMemberCommandOutput
  | BatchGetAccountStatusCommandOutput
  | BatchGetFreeTrialInfoCommandOutput
  | CancelFindingsReportCommandOutput
  | CreateFilterCommandOutput
  | CreateFindingsReportCommandOutput
  | DeleteFilterCommandOutput
  | DescribeOrganizationConfigurationCommandOutput
  | DisableCommandOutput
  | DisableDelegatedAdminAccountCommandOutput
  | DisassociateMemberCommandOutput
  | EnableCommandOutput
  | EnableDelegatedAdminAccountCommandOutput
  | GetDelegatedAdminAccountCommandOutput
  | GetFindingsReportStatusCommandOutput
  | GetMemberCommandOutput
  | ListAccountPermissionsCommandOutput
  | ListCoverageCommandOutput
  | ListCoverageStatisticsCommandOutput
  | ListDelegatedAdminAccountsCommandOutput
  | ListFiltersCommandOutput
  | ListFindingAggregationsCommandOutput
  | ListFindingsCommandOutput
  | ListMembersCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsageTotalsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFilterCommandOutput
  | UpdateOrganizationConfigurationCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type Inspector2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of Inspector2Client class constructor that set the region, credentials and other options.
 */
export interface Inspector2ClientConfig extends Inspector2ClientConfigType {}

type Inspector2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of Inspector2Client class. This is resolved and normalized from the {@link Inspector2ClientConfig | constructor configuration interface}.
 */
export interface Inspector2ClientResolvedConfig extends Inspector2ClientResolvedConfigType {}

/**
 * <p>Amazon Inspector is a vulnerability discovery service that automates continuous scanning for
 *          security vulnerabilities within your Amazon EC2 and Amazon ECR environments.</p>
 */
export class Inspector2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Inspector2ClientResolvedConfig
> {
  /**
   * The resolved configuration of Inspector2Client class. This is resolved and normalized from the {@link Inspector2ClientConfig | constructor configuration interface}.
   */
  readonly config: Inspector2ClientResolvedConfig;

  constructor(configuration: Inspector2ClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}

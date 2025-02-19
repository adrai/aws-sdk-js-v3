import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { BatchGetFreeTrialInfoRequest, BatchGetFreeTrialInfoResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetFreeTrialInfoCommand,
  serializeAws_restJson1BatchGetFreeTrialInfoCommand,
} from "../protocols/Aws_restJson1";

export interface BatchGetFreeTrialInfoCommandInput extends BatchGetFreeTrialInfoRequest {}
export interface BatchGetFreeTrialInfoCommandOutput extends BatchGetFreeTrialInfoResponse, __MetadataBearer {}

/**
 * <p>Gets free trial status for multiple Amazon Web Services accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetFreeTrialInfoCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetFreeTrialInfoCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const command = new BatchGetFreeTrialInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetFreeTrialInfoCommandInput} for command's `input` shape.
 * @see {@link BatchGetFreeTrialInfoCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 */
export class BatchGetFreeTrialInfoCommand extends $Command<
  BatchGetFreeTrialInfoCommandInput,
  BatchGetFreeTrialInfoCommandOutput,
  Inspector2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetFreeTrialInfoCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetFreeTrialInfoCommandInput, BatchGetFreeTrialInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "BatchGetFreeTrialInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetFreeTrialInfoRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetFreeTrialInfoResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetFreeTrialInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetFreeTrialInfoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetFreeTrialInfoCommandOutput> {
    return deserializeAws_restJson1BatchGetFreeTrialInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
